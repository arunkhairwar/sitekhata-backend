"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_repository_1 = require("./auth.repository");
const SECRET_KEY = process.env.JWT_SECRET || "default_secret";
exports.authService = {
    register: async (data) => {
        const existingUser = await auth_repository_1.authRepository.findUserByEmail(data.email);
        if (existingUser) {
            throw new Error("User already exists");
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
        const user = await auth_repository_1.authRepository.createUser({
            ...data,
            password: hashedPassword,
        });
        return user;
    },
    login: async (data) => {
        const user = await auth_repository_1.authRepository.findUserByEmail(data.email);
        if (!user) {
            throw new Error("Invalid credentials");
        }
        const isMatch = await bcryptjs_1.default.compare(data.password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, SECRET_KEY, {
            expiresIn: "1h",
        });
        return { token, user };
    },
};
