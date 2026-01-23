import express from "express";
import { json } from "body-parser";
import router from "./modules";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(json());
app.use(cors());
app.use("/api", router);
app.use(errorHandler);

export default app;
