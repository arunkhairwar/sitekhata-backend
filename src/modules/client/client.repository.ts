import { prisma } from "../../db/prisma";
import { CreateClientInput, IClientRepository, UpdateClientInput } from "./client.types";

class ClientRepository implements IClientRepository {
    async createClient(data: CreateClientInput, userId: string) {
        const { address, ...clientData } = data;
        return await prisma.client.create({
            data: {
                ...clientData,
                createdBy: {
                    connect: {
                        id: userId
                    }
                },
                address: address ? {
                    create: address
                } : undefined
            },
            include: {
                address: true
            }
        });
    }

    async findAllClients(userId: string) {
        return await prisma.client.findMany({
            where: {
                createdById: userId
            },
            include: {
                address: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    }

    async findClientById(id: string) {
        return await prisma.client.findUnique({
            where: { id },
            include: {
                address: true
            }
        });
    }

    async updateClient(id: string, data: UpdateClientInput) {
        const { address, ...clientData } = data;
        return await prisma.client.update({
            where: { id },
            data: {
                ...clientData,
                address: address ? {
                    update: address
                } : undefined
            },
            include: {
                address: true
            }
        });
    }

    async deleteClient(id: string) {
        return await prisma.client.delete({
            where: { id }
        });
    }
}

export const clientRepository = new ClientRepository();
