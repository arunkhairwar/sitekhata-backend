import winston from "winston";
import path from "path";

// ─── Log directory (project root / logs) ────────────────────────────────────
const LOG_DIR = path.resolve(process.cwd(), "logs");

// ─── Colour palette for console transport ───────────────────────────────────
const LEVEL_COLORS: Record<string, string> = {
  error: "\x1b[31m",   // red
  warn: "\x1b[33m",    // yellow
  info: "\x1b[36m",    // cyan
  http: "\x1b[35m",    // magenta
  debug: "\x1b[90m",   // grey
};
const RESET = "\x1b[0m";
const DIM = "\x1b[2m";
const BOLD = "\x1b[1m";

// Status-code colour helper (used by request logger)
export const statusColor = (status: number): string => {
  if (status >= 500) return "\x1b[31m"; // red
  if (status >= 400) return "\x1b[33m"; // yellow
  if (status >= 300) return "\x1b[36m"; // cyan
  if (status >= 200) return "\x1b[32m"; // green
  return "\x1b[0m";
};

// ─── Custom formats ─────────────────────────────────────────────────────────

/** Pretty console format with ANSI colours */
const consoleFormat = winston.format.printf(({ level, message, timestamp, stack, ...meta }) => {
  const colour = LEVEL_COLORS[level] || RESET;
  const tag = `${colour}${BOLD}[${level.toUpperCase()}]${RESET}`;
  const ts = `${DIM}${timestamp}${RESET}`;
  const metaStr = Object.keys(meta).length ? `  ${DIM}${JSON.stringify(meta)}${RESET}` : "";

  // If there's a stack trace (error), print it on the next line
  if (stack) {
    return `${ts} ${tag} ${message}\n${DIM}${stack}${RESET}${metaStr}`;
  }
  return `${ts} ${tag} ${message}${metaStr}`;
});

/** Structured JSON format for file transports */
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.json(),
);

// ─── Logger instance ────────────────────────────────────────────────────────
const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "http" : "debug",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
  ),
  transports: [
    // ── Console (colourised, human-readable) ──
    new winston.transports.Console({
      format: winston.format.combine(consoleFormat),
    }),

    // ── Combined log (all levels) ──
    new winston.transports.File({
      filename: path.join(LOG_DIR, "combined.log"),
      format: fileFormat,
      maxsize: 5 * 1024 * 1024,  // 5 MB
      maxFiles: 5,
    }),

    // ── Error-only log ──
    new winston.transports.File({
      filename: path.join(LOG_DIR, "error.log"),
      level: "error",
      format: fileFormat,
      maxsize: 5 * 1024 * 1024,
      maxFiles: 10,
    }),
  ],

  // Capture uncaught exceptions & unhandled rejections into dedicated files
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(LOG_DIR, "exceptions.log"),
      format: fileFormat,
      maxsize: 5 * 1024 * 1024,
      maxFiles: 5,
    }),
    new winston.transports.Console({
      format: winston.format.combine(consoleFormat),
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.join(LOG_DIR, "rejections.log"),
      format: fileFormat,
      maxsize: 5 * 1024 * 1024,
      maxFiles: 5,
    }),
    new winston.transports.Console({
      format: winston.format.combine(consoleFormat),
    }),
  ],
  exitOnError: false,
});

export default logger;
