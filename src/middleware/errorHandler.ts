import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "../utils/AppError";
import { errorResponse } from "../utils/apiResponse";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // Changed return type to void
  let statusCode = 500;
  let message = "Internal Server Error";
  let data: any = undefined;

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof ZodError) {
    statusCode = 400;
    message = "Validation Error";

    // Format Zod errors to: { "field": "error message" }
    data = err.issues.reduce(
      (acc, issue) => {
        const path = issue.path.join(".");
        acc[path] = issue.message;
        return acc;
      },
      {} as Record<string, string>,
    );
  } else if (err instanceof Error) {
    message = err.message;
  }

  res
    .status(statusCode)
    .json(
      errorResponse(
        message,
        data,
        process.env.NODE_ENV === "development" ? err.stack : undefined,
      ),
    );
};
