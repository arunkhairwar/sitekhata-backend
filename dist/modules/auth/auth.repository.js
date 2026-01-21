"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRepository = void 0;
const prisma_1 = require("../../db/prisma");
exports.authRepository = {
    findUserByEmail: async (email) => {
        return prisma_1.prisma.user.findUnique({
            where: { email },
        });
    },
    createUser: async (data) => {
        return prisma_1.prisma.user.create({
            data,
        });
    },
};
