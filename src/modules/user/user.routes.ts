import { Router } from "express";
import { protect } from "../../middleware/authMiddleware";
import { getById, getWorkers } from "./user.controller";

const router = Router();

router.get("/", protect, getWorkers);
router.get("/details/:id", protect, getById);

export default router;
