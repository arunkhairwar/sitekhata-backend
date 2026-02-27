import { clientRepository } from "./client.repository";
import { CreateClientInput, UpdateClientInput } from "./client.types";
import { AppError } from "../../utils/AppError";
import { HttpStatus } from "../../utils/HttpStatus";

class ClientService {
  async createClient(data: CreateClientInput, userId: string) {
    const { createdById, ...client } = await clientRepository.createClient(
      data,
      userId,
    );
    return client;
  }

  async getAllClients(userId: string) {
    return await clientRepository.findAllClients(userId);
  }

  async updateClient(id: string, data: UpdateClientInput, userId: string) {
    const client = await clientRepository.findClientById(id);
    if (!client) {
      throw new AppError("Client not found", HttpStatus.NOT_FOUND);
    }
    if (client.createdById !== userId) {
      throw new AppError(
        "You are not authorized to update this client",
        HttpStatus.FORBIDDEN,
      );
    }
    return await clientRepository.updateClient(id, data);
  }

  async deleteClient(id: string, userId: string) {
    const client = await clientRepository.findClientById(id);
    if (!client) {
      throw new AppError("Client not found", HttpStatus.NOT_FOUND);
    }
    if (client.createdById !== userId) {
      throw new AppError(
        "You are not authorized to delete this client",
        HttpStatus.FORBIDDEN,
      );
    }
    return await clientRepository.deleteClient(id);
  }

  async getClientById(id: string, userId: string) {
    const client = await clientRepository.findClientById(id);
    if (!client) {
      throw new AppError("Client not found", HttpStatus.NOT_FOUND);
    }
    if (client.createdById !== userId) {
      throw new AppError(
        "You are not authorized to view this client",
        HttpStatus.FORBIDDEN,
      );
    }
    return client;
  }
}

export const clientService = new ClientService();
