import { CreateSiteInput } from "./site.types";
import { siteRepository } from "./site.repository";

class SiteService {
    async createSite(data: CreateSiteInput, userId: string) {
        const { createdById, ...site } = await siteRepository.createSite(data, userId);
        return site;
    }
}

export const siteService = new SiteService();