import { Request, Response } from "express";
import { registerUserSchema, loginUserSchema } from "./auth.schema";
import { authService } from "./auth.service";

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const validation = registerUserSchema.safeParse(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.error.format() });
      return;
    }

    const user = await authService.register(validation.data);
    res.status(201).json(user);
  } catch (error: any) {
    if (error.message === "User already exists") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const validation = loginUserSchema.safeParse(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.error.format() });
      return;
    }

    const result = await authService.login(validation.data);
    res.header("Authorization", `Bearer ${result.token}`,);
    res.status(200).json(result);
  } catch (error: any) {
    if (error.message === "Invalid credentials") {
      res.status(401).json({ error: error.message });
    } else {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
