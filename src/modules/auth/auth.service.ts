import jwt from "jsonwebtoken";
import { authRepository } from "./auth.repository";
import { RegisterUserDto, LoginUserDto } from "./auth.type";
import { hashPassword, verifyPass } from "../../utils/password.utils";

const SECRET_KEY = process.env.JWT_SECRET || "default_secret";

export const authService = {
  register: async (data: RegisterUserDto) => {
    const existingUser = await authRepository.findUserByEmail(data.email);
    if (existingUser) {
      throw new Error("User already exists with this email");
    }
    const existingUserMobile = await authRepository.findUserByMobile(data.mobile);
    if (existingUserMobile) {
      throw new Error("User already exists with this mobile");
    }
    const hashedPassword = await hashPassword(data.password);
    const user = await authRepository.createUser({
      ...data,
      password: hashedPassword,
    });

    const { password: _, addressId: __, ...result } = user;
    return result;
  },

  login: async (data: LoginUserDto) => {
    const dbUser = await authRepository.findUserByEmail(data.email);
    if (!dbUser) {
      throw new Error("User not found");
    }
    const isMatch = await verifyPass(data.password, dbUser.password);
    if (!isMatch) {
      throw new Error("Invalid Password");
    }
    const token = jwt.sign({ userId: dbUser.id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return { token };
  },


  verify: async (token: string) => {
    try {
      const decoded: any = jwt.verify(token, SECRET_KEY);
      const user = await authRepository.findUserById(decoded.userId);
      if (!user) {
        throw new Error("User not found");
      }
      const { password: _, addressId: __, ...result } = user;
      return result; 
    } catch (error: any) {
      if (error.name === "TokenExpiredError") {
        throw new Error("Token expired");
      } else if (error.name === "JsonWebTokenError") {
        throw new Error("Invalid token");
      } else {
        throw error;
      }
    }
  },
};
