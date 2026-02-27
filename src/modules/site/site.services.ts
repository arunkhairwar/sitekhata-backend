import { CreateSiteInput } from "./site.types";
import { siteRepository } from "./site.repository";
import { clientRepository } from "../client/client.repository";
import { prisma } from "../../db/prisma";
import { AppError } from "../../utils/AppError";
import { HttpStatus } from "../../utils/HttpStatus";

class SiteService {
  async createSite(data: CreateSiteInput, userId: string) {
    const client = await clientRepository.findClientById(data.client);
    if (!client) {
      throw new AppError("Client not found", HttpStatus.NOT_FOUND);
    }
    if (client.createdById !== userId) {
      throw new AppError("Unauthorized", HttpStatus.FORBIDDEN);
    }

    const foundSite = await prisma.site.findFirst({
      where: {
        name: data.name,
        clientId: data.client,
      },
    });

    if (foundSite) {
      throw new AppError(
        "Site already exists for this client with this name!",
        HttpStatus.CONFLICT,
      );
    }
    const { createdById, ...site } = await siteRepository.createSite(
      data,
      userId,
    );
    return site;
  }

  async getSites(userId: string) {
    const sites = await siteRepository.findAllSites(userId);
    return sites;
  }
}

export const siteService = new SiteService();
