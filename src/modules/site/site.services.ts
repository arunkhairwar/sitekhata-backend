import { CreateSiteInput } from "./site.types";
import { siteRepository } from "./site.repository";
import { clientRepository } from "../client/client.repository";

class SiteService {
  async createSite(data: CreateSiteInput, userId: string) {
    const client = await clientRepository.findClientById(data.client);
    if (!client) {
      throw new Error("Client not found");
    }
    if (client.createdById !== userId) {
      throw new Error("Unauthorized");
    }
    const { createdById, ...site } = await siteRepository.createSite(
      data,
      userId,
    );
    return site;
  }
}

export const siteService = new SiteService();
