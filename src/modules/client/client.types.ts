import { z } from "zod";
import { createClientSchema, updateClientSchema } from "./client.schema";

export type CreateClientInput = z.infer<typeof createClientSchema>;
export type UpdateClientInput = z.infer<typeof updateClientSchema>;

export interface IClientRepository {
    createClient(data: CreateClientInput, userId: string): Promise<any>;
    findAllClients(userId: string): Promise<any[]>;
    findClientById(id: string): Promise<any | null>;
    updateClient(id: string, data: UpdateClientInput): Promise<any>;
    deleteClient(id: string): Promise<any>;
}
