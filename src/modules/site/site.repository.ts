import { prisma } from "../../db/prisma";
import { AppError } from "../../utils/AppError";
import { HttpStatus } from "../../utils/HttpStatus";
import {
  CreateSiteInput,
  ISiteRepository,
  UpdateSiteInput,
} from "./site.types";

class SiteRepository implements ISiteRepository {
  async createSite(data: CreateSiteInput, userId: string): Promise<any> {
    return await prisma.$transaction(async (tx: any) => {
      let addressId: string | undefined;

      if (data.address) {
        const newAddress = await tx.address.create({
          data: data.address,
        });
        addressId = newAddress.id;
      }

      return await tx.site.create({
        data: {
          name: data.name,
          image: data.image,
          clientId: data.client,
          createdById: userId,
          addressId: addressId,
        },
      });
    });
  }

  async findAllSites(userId: string): Promise<any[]> {
    return await prisma.site.findMany({
      where: {
        createdById: userId,
      },
    });
  }

  async findSiteById(id: string): Promise<any | null> {
    return await prisma.site.findUnique({
      where: {
        id,
      },
    });
  }

  async updateSite(id: string, data: UpdateSiteInput): Promise<any> {
    const site = await prisma.site.findUnique({
      where: {
        id,
      },
    });
    if (!site) {
      throw new AppError("Site not found", HttpStatus.NOT_FOUND);
    }
    const { address, client, ...rest } = data;

    return await prisma.$transaction(async (tx: any) => {
      let addressId = site.addressId;

      if (address) {
        if (addressId) {
          await tx.address.update({
            where: {
              id: addressId,
            },
            data: address,
          });
        } else {
          const newAddress = await tx.address.create({
            data: address,
          });
          addressId = newAddress.id;
        }
      }

      return await tx.site.update({
        where: {
          id,
        },
        data: {
          ...rest,
          clientId: client,
          addressId,
        },
      });
    });
  }

  async deleteSite(id: string): Promise<any> {
    const site = await prisma.site.findUnique({
      where: {
        id,
      },
    });
    if (!site) {
      throw new AppError("Site not found", HttpStatus.NOT_FOUND);
    }
    return await prisma.site.delete({
      where: {
        id,
      },
    });
  }
}
export const siteRepository = new SiteRepository();
