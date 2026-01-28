import { prisma } from "../../db/prisma";
import { RegisterUserDto } from "./auth.type";

export const authRepository = {
  findUserByEmail: async (email: string) => {
    return prisma.user.findUnique({
      where: { email },
    });
  },
  findUserByMobile: async (mobile: string) => {
    return prisma.user.findUnique({
      where: { mobile },
    });
  },
  findUserById: async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
      include: {
        address: {
          select: {
            addressLine1: true,
            addressLine2: true,
            city: true,
            state: true,
            pincode: true,
            country: true,
          },
        },
      },
    });
  },
  createUser: async (data: RegisterUserDto) => {
    const { address, ...rest } = data;
    return prisma.user.create({
      data: {
        ...rest,
        address: address ? { create: address } : undefined,
      },
      include: {
        address: true,
      },
    });
  },
};
