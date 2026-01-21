import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authRepository } from "./auth.repository";

const SECRET_KEY = process.env.JWT_SECRET || "default_secret";

export const authService = {
  register: async (data: any) => {
    const existingUser = await authRepository.findUserByEmail(data.email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await authRepository.createUser({
      ...data,
      password: hashedPassword,
    });
    const filteredUser = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    return filteredUser;
  },

  login: async (data: any) => {
    const user = await authRepository.findUserByEmail(data.email);
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    const filteredUser = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    return { token, filteredUser };
  },
};
