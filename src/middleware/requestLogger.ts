import morgan, { StreamOptions } from "morgan";
import logger, { statusColor } from "../lib/logger";

// ─── ANSI helpers ───────────────────────────────────────────────────────────
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";

const METHOD_COLORS: Record<string, string> = {
  GET: "\x1b[32m",       // green
  POST: "\x1b[34m",      // blue
  PUT: "\x1b[33m",       // yellow
  PATCH: "\x1b[33m",     // yellow
  DELETE: "\x1b[31m",    // red
  OPTIONS: "\x1b[90m",   // grey
  HEAD: "\x1b[90m",      // grey
};

// ─── Pipe morgan output into Winston at the 'http' level ────────────────────
const stream: StreamOptions = {
  write: (message: string) => {
    logger.http(message.trim());
  },
};

// ─── Skip logging in test environment ───────────────────────────────────────
const skip = () => process.env.NODE_ENV === "test";

// ─── Custom morgan token: coloured method ───────────────────────────────────
morgan.token("colored-method", (req) => {
  const method = req.method ?? "GET";
  const color = METHOD_COLORS[method] || RESET;
  return `${color}${BOLD}${method}${RESET}`;
});

// ─── Custom morgan token: coloured status ───────────────────────────────────
morgan.token("colored-status", (_req, res) => {
  const status = res.statusCode;
  const color = statusColor(status);
  return `${color}${BOLD}${status}${RESET}`;
});

// ─── Custom morgan token: response time with colour ─────────────────────────
morgan.token("colored-response-time", (_req, res) => {
  const time = res.getHeader("X-Response-Time") || "–";
  // morgan's :response-time fills the value by the time write() is called,
  // so we rely on morgan's built-in calculation via the format string instead.
  return `${DIM}${time}ms${RESET}`;
});

// ─── Format string ──────────────────────────────────────────────────────────
const FORMAT = `:colored-method :url :colored-status :response-time ms - :res[content-length]`;

/**
 * Express middleware – mount before routes.
 *
 * Console output example:
 *   2026-04-28 21:00:00 [HTTP] GET /api/v1/client 200 12.345 ms - 512
 */
const requestLogger = morgan(FORMAT, { stream, skip });

export default requestLogger;
