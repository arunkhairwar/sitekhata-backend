import { prisma } from "../../db/prisma";
import {
  CreateClientInput,
  IClientRepository,
  UpdateClientInput,
} from "./client.types";

class ClientRepository implements IClientRepository {
  async createClient(data: CreateClientInput, userId: string) {
    return await prisma.client.create({
      data: {
        ...data,
        createdBy: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
            mobile: true,
            role: true,
          },
        },
      },
    });
  }

  async findAllClients(userId: string) {
    return await prisma.client.findMany({
      where: {
        createdById: userId,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
            mobile: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findClientById(id: string) {
    return await prisma.client.findUnique({
      where: { id },
    });
  }

  async updateClient(id: string, data: UpdateClientInput) {
    return await prisma.client.update({
      where: { id },
      data,
    });
  }

  async deleteClient(id: string) {
    return await prisma.client.delete({
      where: { id },
    });
  }

  async findClientByMobile(mobile: string) {
    return await prisma.client.findUnique({
      where: { mobile },
    });
  }
}

export const clientRepository = new ClientRepository();
