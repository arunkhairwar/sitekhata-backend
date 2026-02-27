import { Router } from "express";
import { protect } from "../../middleware/authMiddleware";
import {
    addClient,
    deleteClient,
    getClientById,
    getClients,
    updateClient,
} from "./client.controller";

const router = Router();

router.post("/", protect, addClient);
router.get("/", protect, getClients);
router.get("/:id", protect, getClientById);
router.put("/:id", protect, updateClient);
router.delete("/:id", protect, deleteClient);

export default router;
