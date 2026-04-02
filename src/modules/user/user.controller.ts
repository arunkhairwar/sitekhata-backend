import { NextFunction, Request, Response } from "express";
import { pool } from "../../db";
import { UserRole } from "./user.types";

export async function getUsers(req: Request, res: Response, next: NextFunction) {

  try {
    // const user = req.body.user;
    const { role } = req.query;
    if (!role) {
      throw new Error("Role is required");
    }
    if (role === UserRole.CONTRACTOR || role === UserRole.WORKER) {
      const result = await pool.query("SELECT * FROM users WHERE role = $1", [role]);
      res.json(result.rows);
    }

  } catch (error) {
    next(error)
  }
}

export async function updateUser(req: Request, res: Response) {
  const result = await pool.query(
    `SELECT * FROM users where user=${req.body.name};`
  );
  res.json(result.rows);
}
