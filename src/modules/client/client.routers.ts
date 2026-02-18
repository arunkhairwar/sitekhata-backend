import { Router } from "express";
import { addClient, deleteClient, getClients, updateClient } from "./client.controller";
import { protect } from "../../middleware/authMiddleware";

const router = Router();

router.post("/", protect, addClient);
router.get("/", protect, getClients);
router.put("/:id", protect, updateClient);
router.delete("/:id", protect, deleteClient);

export default router;