import { Router } from "express";
import userRouter from "./user/user.routes";
import authRouter from "./auth/auth.routes";
import clientRouter from "./client/client.routers";
import siteRouter from "./site/site.router";

const router = Router();

router.use("/users", userRouter);
router.use("/worker", userRouter)
router.use("/auth", authRouter);
router.use("/client", clientRouter);
router.use("/site", siteRouter);

export default router;
