import { prisma } from "../../db/prisma";

export const authRepository = {
  findUserByEmail: async (email: string) => {
    return prisma.user.findUnique({
      where: { email },
    });
  },
  createUser: async (data: any) => {
    return prisma.user.create({
      data,
    });
  },
};
