import { NextFunction, Response } from "express";
import { AuthRequest } from "../../middleware/authMiddleware";
import { successResponse } from "../../utils/apiResponse";
import { AppError } from "../../utils/AppError";
import { createSiteSchema } from "./site.schema";
import { siteService } from "./site.services";

export const createSite = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const validation = createSiteSchema.safeParse(req.body);
        if (!validation.success) {
            throw new AppError(validation.error.issues[0].message, 400);
        }
        const userId = req.user.id;
        const site = await siteService.createSite(validation.data, userId);
        return res.status(201).json(successResponse(site, "Site added successfully"));
    } catch (error) {
        next(error);
    }
};