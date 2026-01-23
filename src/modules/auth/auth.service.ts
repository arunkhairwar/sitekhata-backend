import jwt from "jsonwebtoken";
import { authRepository } from "./auth.repository";
import { RegisterUserDto, LoginUserDto } from "./auth.type";
import { hashPassword, verifyPass } from "../../utils/password.utils";

const SECRET_KEY = process.env.JWT_SECRET || "default_secret";

export const authService = {
  register: async (data: RegisterUserDto) => {
    const existingUser = await authRepository.findUserByEmail(data.email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(data.password);
    const user = await authRepository.createUser({
      ...data,
      password: hashedPassword,
    });

    return user;
  },

  login: async (data: LoginUserDto) => {
    const user = await authRepository.findUserByEmail(data.email);
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await verifyPass(data.password, user.password);
    if (!isMatch) {
      throw new Error("Invalid Password");
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
