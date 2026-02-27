import { NextFunction, Request, Response } from "express";
import { clientService } from "./client.services";
import { createClientSchema, updateClientSchema } from "./client.schema";
import { successResponse } from "../../utils/apiResponse";
import { AppError } from "../../utils/AppError";
import { HttpStatus } from "../../utils/HttpStatus";
import { AuthRequest } from "../../middleware/authMiddleware";

export const addClient = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validation = createClientSchema.safeParse(req.body);
    if (!validation.success) {
      throw new AppError(
        validation.error.issues[0].message,
        HttpStatus.BAD_REQUEST,
      );
    }
    const userId = req.user.id;
    const client = await clientService.createClient(validation.data, userId);
    return res
      .status(HttpStatus.CREATED)
      .json(successResponse(client, "Client created successfully"));
  } catch (error) {
    next(error);
  }
};

export const getClients = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.id;
    const clients = await clientService.getAllClients(userId);
    return res
      .status(HttpStatus.OK)
      .json(successResponse(clients, "Clients fetched successfully"));
  } catch (error) {
    next(error);
  }
};

export const updateClient = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id as string;
    const validation = updateClientSchema.safeParse(req.body);
    if (!validation.success) {
      throw new AppError(
        validation.error.issues[0].message,
        HttpStatus.BAD_REQUEST,
      );
    }
    const userId = req.user.id;
    const client = await clientService.updateClient(
      id,
      validation.data,
      userId,
    );
    return res
      .status(HttpStatus.OK)
      .json(successResponse(client, "Client updated successfully"));
  } catch (error) {
    next(error);
  }
};

export const deleteClient = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id as string;
    const userId = req.user.id;
    await clientService.deleteClient(id, userId);
    return res
      .status(HttpStatus.OK)
      .json(successResponse(null, "Client deleted successfully"));
  } catch (error) {
    next(error);
  }
};
