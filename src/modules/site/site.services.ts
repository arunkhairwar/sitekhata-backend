import { prisma } from "../../db/prisma";
import { AppError } from "../../utils/AppError";
import { HttpStatus } from "../../utils/HttpStatus";
import { clientRepository } from "../client/client.repository";
import { siteRepository } from "./site.repository";
import { CreateSiteInput, UpdateSiteInput } from "./site.types";

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

  async getSiteById(id: string, userId: string) {
    const site = await siteRepository.findSiteById(id);
    if (!site) {
      throw new AppError("Site not found", HttpStatus.NOT_FOUND);
    }
    if (site.createdById !== userId) {
      throw new AppError(
        "You are not authorized to view this site",
        HttpStatus.FORBIDDEN,
      );
    }
    return site;
  }

  async updateSite(id: string, data: UpdateSiteInput, userId: string) {
    const site = await siteRepository.findSiteById(id);
    if (!site) {
      throw new AppError("Site not found", HttpStatus.NOT_FOUND);
    }
    if (site.createdById !== userId) {
      throw new AppError(
        "You are not authorized to update this site",
        HttpStatus.FORBIDDEN,
      );
    }
    const { createdById, ...siteData } = await siteRepository.updateSite(
      id,
      data,
    );
    return siteData;
  }

  async deleteSite(id: string, userId: string) {
    const site = await siteRepository.findSiteById(id);
    if (!site) {
      throw new AppError("Site not found", HttpStatus.NOT_FOUND);
    }
    if (site.createdById !== userId) {
      throw new AppError(
        "You are not authorized to delete this site",
        HttpStatus.FORBIDDEN,
      );
    }
    return await siteRepository.deleteSite(id);
  }
}

export const siteService = new SiteService();
