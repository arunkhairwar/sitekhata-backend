import { Router } from "express";
import userRouter from "./user/user.routes";
import authRouter from "./auth/auth.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
