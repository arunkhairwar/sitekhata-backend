import { Router } from "express";
import userRouter from "./user/user.routes";
import authRouter from "./auth/auth.routes";
import clientRouter from "./client/client.routers";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/client", clientRouter);

export default router;
