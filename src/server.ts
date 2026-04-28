import dotenv from "dotenv";
dotenv.config();

import { getEnvSummary, validateEnv } from "./lib/env";
import logger from "./lib/logger";

// ── Validate environment before anything else ───────────────────────────────
let env;
try {
  env = validateEnv();
} catch (error) {
  logger.error((error as Error).message);
  process.exit(1);
}

import app from "./app";
import getIPAddress from "./services/getIPAddress";

const ip = getIPAddress();

// ── Start server ────────────────────────────────────────────────────────────
app.listen(env.PORT, () => {
  logger.info("Server started successfully");
  logger.info(`Address      : http://${ip}:${env.PORT}`);

  // Auto-log every field declared in the Zod env schema
  for (const line of getEnvSummary(env)) {
    logger.info(line);
  }
});

// ── Crash safety net (logged to logs/exceptions.log & logs/rejections.log) ──
// Winston's exceptionHandlers & rejectionHandlers already capture these,
// but we add explicit listeners for a clean shutdown + exit-code.

process.on("uncaughtException", (error: Error) => {
  logger.error("UNCAUGHT EXCEPTION — shutting down", {
    stack: error.stack,
  });
  process.exit(1);
});

process.on("unhandledRejection", (reason: unknown) => {
  logger.error("UNHANDLED REJECTION — shutting down", {
    reason: reason instanceof Error ? reason.stack : reason,
  });
  process.exit(1);
});
