import { prisma } from "../../db/prisma";

export const userRepository = {
  findAll: () => prisma.user.findMany(),
  findById: (id: string) => prisma.user.findUnique({ where: { id } }),
  create: (data: any) => prisma.user.create({ data }),
  update: (id: string, data: any) =>
    prisma.user.update({ where: { id }, data }),
  delete: (id: string) => prisma.user.delete({ where: { id } }),
};
