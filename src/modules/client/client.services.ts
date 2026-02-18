import { clientRepository } from "./client.repository";
import { CreateClientInput, UpdateClientInput } from "./client.types";
import { AppError } from "../../utils/AppError";

class ClientService {
    async createClient(data: CreateClientInput, userId: string) {
        return await clientRepository.createClient(data, userId);
    }

    async getAllClients(userId: string) {
        return await clientRepository.findAllClients(userId);
    }

    async updateClient(id: string, data: UpdateClientInput, userId: string) {
        const client = await clientRepository.findClientById(id);
        if (!client) {
            throw new AppError("Client not found", 404);
        }
        if (client.createdById !== userId) {
            throw new AppError("You are not authorized to update this client", 403);
        }
        return await clientRepository.updateClient(id, data);
    }

    async deleteClient(id: string, userId: string) {
        const client = await clientRepository.findClientById(id);
        if (!client) {
            throw new AppError("Client not found", 404);
        }
        if (client.createdById !== userId) {
            throw new AppError("You are not authorized to delete this client", 403);
        }
        return await clientRepository.deleteClient(id);
    }
}

export const clientService = new ClientService();
