import { Router } from "express";
import { protect } from "../../middleware/authMiddleware";
import { createSite } from "./site.controllers";


const router = Router();

router.post("/", protect, createSite);
// router.get("/", protect, getClients);
// router.put("/:id", protect, updateClient);
// router.delete("/:id", protect, deleteClient);

export default router;