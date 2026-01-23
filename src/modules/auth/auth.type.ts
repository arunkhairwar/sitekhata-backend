import { z } from "zod";
import { registerUserSchema, loginUserSchema } from "./auth.schema";

export type RegisterUserDto = z.infer<typeof registerUserSchema>;
export type LoginUserDto = z.infer<typeof loginUserSchema>;

type responseUerType = {
  id: string;
  email: string;
  name: string;
};
export type loginResponseType = {
  user: responseUerType;
  token: string;
};

export enum Role {
  CONTRACTOR = "CONTRACTOR",
  WORKER = "WORKER",
}
