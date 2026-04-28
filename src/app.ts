import express from "express";
import { json } from "body-parser";
import router from "./modules";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import requestLogger from "./middleware/requestLogger";

import { protect } from "./middleware/authMiddleware";

const app = express();

// ── Body parsing ────────────────────────────────────────────────────────────
app.use(json());
app.use(cors());

// ── HTTP request logger (must be mounted BEFORE routes) ─────────────────────
app.use(requestLogger);

// ── Routes ──────────────────────────────────────────────────────────────────
app.use("/api/v1", router);

app.get("/test-auth", protect, (req, res) => {
  res.status(200).json({ status: "success", user: (req as any).user });
});

// ── Global error handler (must be mounted AFTER routes) ─────────────────────
app.use(errorHandler);

export default app;
