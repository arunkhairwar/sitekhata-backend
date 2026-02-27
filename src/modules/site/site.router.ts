import { Router } from "express";
import { protect } from "../../middleware/authMiddleware";
import { createSite, getSites } from "./site.controllers";


const router = Router();

router.post("/", protect, createSite);
router.get("/", protect, getSites);
// router.put("/:id", protect, updateClient);
// router.delete("/:id", protect, deleteClient);

export default router;