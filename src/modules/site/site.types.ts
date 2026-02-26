import z from "zod";
import { createSiteSchema } from "./site.schema";

export type CreateSiteInput = z.infer<typeof createSiteSchema>;
export type UpdateSiteInput = z.infer<typeof createSiteSchema>;

export interface ISiteRepository {
    createSite(data: CreateSiteInput, userId: string): Promise<any>;
    findAllSites(userId: string): Promise<any[]>;
    findSiteById(id: string): Promise<any | null>;
    updateSite(id: string, data: UpdateSiteInput): Promise<any>;
    deleteSite(id: string): Promise<any>;
}