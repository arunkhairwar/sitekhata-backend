import { Request, Response } from "express";
import { pool } from "../../db";

export async function getUsers(req: Request, res: Response) {
  const result = await pool.query("SELECT * FROM users;");
  res.json(result.rows);
}

export async function updateUser(req: Request, res: Response) {
  const result = await pool.query(
    `SELECT * FROM users where user=${req.body.name};`
  );
  res.json(result.rows);
}
