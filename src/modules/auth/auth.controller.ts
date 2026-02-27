import { NextFunction, Request, Response } from "express";
import { registerUserSchema, loginUserSchema } from "./auth.schema";
import { authService } from "./auth.service";
import { successResponse } from "../../utils/apiResponse";
import { AppError } from "../../utils/AppError";
import { HttpStatus } from "../../utils/HttpStatus";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { body } = req;
    const validation = registerUserSchema.parse(body);

    const user = await authService.register(validation);
    res
      .status(HttpStatus.CREATED)
      .json(successResponse(user, "User registered successfully"));
  } catch (error: any) {
    if (error.message === "User already exists") {
      next(new AppError(error.message, HttpStatus.BAD_REQUEST));
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

    res.status(HttpStatus.OK).json(successResponse(result, "Login successful"));
  } catch (error: any) {
    if (error.message === "Invalid credentials") {
      next(new AppError(error.message, HttpStatus.UNAUTHORIZED));
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
      throw new AppError("No token provided", HttpStatus.UNAUTHORIZED);
    }
    const token = authHeader.split(" ")[1];
    const result = await authService.verify(token);
    res
      .status(HttpStatus.OK)
      .json(successResponse(result, "User verified successfully"));
  } catch (error: any) {
    if (
      error.message === "Invalid credentials" ||
      error.message === "Token expired" ||
      error.message === "Invalid token" ||
      error.message === "No token provided"
    ) {
      next(new AppError(error.message, HttpStatus.UNAUTHORIZED));
    } else {
      next(error);
    }
  }
};
