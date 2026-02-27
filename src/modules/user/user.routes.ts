import { Router } from "express";
import { getUsers } from "./user.controller";
import { protect } from "../../middleware/authMiddleware";

const router = Router();

router.get("/", protect, getUsers);

export default router;
