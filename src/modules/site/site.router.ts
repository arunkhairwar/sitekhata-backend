import { Router } from "express";
import { protect } from "../../middleware/authMiddleware";
import {
    createSite,
    deleteSite,
    getSiteById,
    getSites,
    updateSite,
} from "./site.controllers";

const router = Router();

router.post("/", protect, createSite);
router.get("/", protect, getSites);
router.get("/:id", protect, getSiteById);
router.put("/:id", protect, updateSite);
router.delete("/:id", protect, deleteSite);

export default router;
