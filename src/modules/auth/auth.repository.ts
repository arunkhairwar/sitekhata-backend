import { prisma } from "../../db/prisma";
import { RegisterUserDto } from "./auth.type";

export const authRepository = {
  findUserByEmail: async (email: string) => {
    return prisma.user.findUnique({
      where: { email },
    });
  },
  createUser: async (data: RegisterUserDto) => {
    return prisma.user.create({
      data,
    });
  },
};
