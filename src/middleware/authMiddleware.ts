import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError";
import { authRepository } from "../modules/auth/auth.repository";

export interface AuthRequest extends Request {
    user?: any;
}

export const protect = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(
            new AppError("You are not logged in! Please log in to get access.", 401)
        );
    }

    try {
        const decoded: any = jwt.verify(
            token,
            process.env.JWT_SECRET!
        );

        const currentUser = await authRepository.findUserById(decoded.userId);

        if (!currentUser) {
            return next(
                new AppError(
                    "The user belonging to this token no longer exists.",
                    401
                )
            );
        }

        req.user = currentUser;
        next();
    } catch (error) {
        return next(new AppError("Invalid token. Please log in again!", 401));
    }
};
