import { z } from "zod";
export const mobileValidation = z.string("Mobile number is required").trim().min(1,"mobile number is required").regex(/^[6-9]\d{9}$/, "Mobile number must be a valid.");
export const createClientSchema = z.object({
    name: z.string("Name is required").min(3, "Name must be at least 3 characters"),
    mobile: mobileValidation,
});

export const updateClientSchema = z.object({
    name: z.string().min(3).optional(),
    mobile: mobileValidation.optional(),
});
