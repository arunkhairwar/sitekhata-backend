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
