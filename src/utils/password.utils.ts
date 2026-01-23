import bcrypt from "bcryptjs";
export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 10);
};
export const verifyPass = async (reqPass: string, dbPass: string) => {
  return bcrypt.compare(reqPass, reqPass);
};
