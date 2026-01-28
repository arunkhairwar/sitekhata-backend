import { NextFunction, Request, Response } from "express";
import { registerUserSchema, loginUserSchema } from "./auth.schema";
import { authService } from "./auth.service";
import { successResponse } from "../../utils/apiResponse";
import { AppError } from "../../utils/AppError";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { body } = req;
    const validation = registerUserSchema.parse(body);

    const user = await authService.register(validation);
    res.status(201).json(successResponse(user, "User registered successfully"));
  } catch (error: any) {
    if (error.message === "User already exists") {
      next(new AppError(error.message, 400));
    } else {
      next(error);
    }
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { body } = req;
    const validation = loginUserSchema.parse(body);

    const result = await authService.login(validation);
    res.header("Authorization", `Bearer ${result.token}`);

    res.status(200).json(successResponse(result, "Login successful"));
  } catch (error: any) {
    if (error.message === "Invalid credentials") {
      next(new AppError(error.message, 401));
    } else {
      next(error);
    }
  }
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("No token provided", 401);
    }
    const token = authHeader.split(" ")[1];
    const result = await authService.verify(token);
    res.status(200).json(successResponse(result, "User verified successfully"));
  } catch (error: any) {
    if (
      error.message === "Invalid credentials" ||
      error.message === "Token expired" ||
      error.message === "Invalid token" ||
      error.message === "No token provided"
    ) {
      next(new AppError(error.message, 401));
    } else {
      next(error);
    }
  }
};
