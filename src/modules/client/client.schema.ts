import { z } from "zod";

export const createClientSchema = z.object({
    name: z.string("Name is required").min(3, "Name must be at least 3 characters"),
    mobile: z.string("Mobile number is required").min(10, "Mobile number must be at least 10 digits"),
    address: z.object({
        addressLine1: z.string().optional(),
        addressLine2: z.string().optional(),
        city: z.string("City is required"),
        state: z.string("State is required"),
        pincode: z.string("Pincode is required"),
        country: z.string("Country is required"),
    }).optional(),
});

export const updateClientSchema = z.object({
    name: z.string().min(3).optional(),
    mobile: z.string().min(10).optional(),
    address: z.object({
        addressLine1: z.string().optional(),
        addressLine2: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        pincode: z.string().optional(),
        country: z.string().optional(),
    }).optional(),
});
