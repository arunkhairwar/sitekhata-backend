import { NextFunction, Request, Response } from "express";
import { pool } from "../../db";
import { HttpStatus } from "../../utils/HttpStatus";
import { successResponse } from "../../utils/apiResponse";
import { userRepository } from "./user.repository";
import { AppError } from "../../utils/AppError";

export async function getWorkers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const result = await userRepository.findAllWorkers();
    return res
      .status(HttpStatus.OK)
      .json(successResponse(result, "Workers fetched successfully"));
  } catch (error) {
    next(error);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id as string;
    const user = await userRepository.findById(id);
    if (!user) {
      throw new AppError("User not found", HttpStatus.NOT_FOUND);
    }
    return res
      .status(HttpStatus.OK)
      .json(successResponse(user, "Worker fetched successfully"));
  } catch (error) {
    next(error);
  }
}
export async function updateUser(req: Request, res: Response) {
  const result = await pool.query(
    `SELECT * FROM users where user=${req.body.name};`,
  );
  res.json(result.rows);
}
