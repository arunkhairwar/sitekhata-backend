import express from "express";
import { json } from "body-parser";
import router from "./modules";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());
app.use("/api", router);

export default app;
