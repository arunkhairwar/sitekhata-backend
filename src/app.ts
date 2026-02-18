import express from "express";
import { json } from "body-parser";
import router from "./modules";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";

import { protect } from "./middleware/authMiddleware";

const app = express();

app.use(json());
app.use(cors());
app.use("/api", router);

app.get("/test-auth", protect, (req, res) => {
    res.status(200).json({ status: "success", user: (req as any).user });
});
app.use(errorHandler);

export default app;
