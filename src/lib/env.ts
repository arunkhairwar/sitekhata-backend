import { z } from "zod/v4";

// ─── Environment schema ────────────────────────────────────────────────────
const envSchema = z.object({
  // Database
  DATABASE_URL: z
    .url("DATABASE_URL must be a valid connection URL")
    .describe("PostgreSQL connection string"),

  // Security
  JWT_SECRET: z
    .string()
    .min(8, "JWT_SECRET must be at least 8 characters")
    .describe("Secret key for signing JSON Web Tokens"),

  // Server
  PORT: z.coerce
    .number()
    .int()
    .min(1)
    .max(65535)
    .default(5000)
    .describe("Port the server listens on"),

  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development")
    .describe("Application environment"),
});

// ─── Sensitive-field patterns (auto-masked in logs) ────────────────────────
const SENSITIVE_PATTERNS = [
  "SECRET",
  "PASSWORD",
  "TOKEN",
  "KEY",
  "URL",
  "CREDENTIAL",
];

function isSensitive(name: string): boolean {
  const upper = name.toUpperCase();
  return SENSITIVE_PATTERNS.some((p) => upper.includes(p));
}

// ─── Exported type ─────────────────────────────────────────────────────────
export type Env = z.infer<typeof envSchema>;

// ─── Validate & export ─────────────────────────────────────────────────────
/**
 * Parses `process.env` against the schema.
 * Throws a descriptive error listing every invalid / missing variable.
 */
export function validateEnv(): Env {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => {
      const field = issue.path.join(".");
      return `  - ${field}: ${issue.message}`;
    });

    const message = [
      "",
      "Environment validation failed:",
      ...errors,
      "",
      "Fix the above issues in your .env file and restart the server.",
      "",
    ].join("\n");

    throw new Error(message);
  }

  return result.data;
}

// ─── Auto-generate env summary lines from schema ───────────────────────────
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";
const MASKED = `${GREEN}***MASKED***${RESET}`;

/**
 * Returns an array of formatted `"FIELD_NAME  : value"` strings,
 * derived automatically from the Zod schema keys.
 * Sensitive fields are masked; all others show their actual value.
 *
 * Adding a new field to `envSchema` is all that's needed —
 * it will appear in the startup log automatically.
 */
export function getEnvSummary(env: Env): string[] {
  const keys = Object.keys(envSchema.shape) as (keyof Env)[];
  const maxLen = Math.max(...keys.map((k) => String(k).length));

  return keys.map((key) => {
    const label = String(key).padEnd(maxLen);
    const value = isSensitive(String(key)) ? MASKED : String(env[key]);
    return `${label} : ${value}`;
  });
}
