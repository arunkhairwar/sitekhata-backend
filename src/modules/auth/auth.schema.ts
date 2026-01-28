import { z } from "zod";

const passwordValidation = z
  .string({ message: "Password is required" })
  .min(6, "Password must be at least 6 characters long")
  .max(16, "Password must be at most 16 characters long")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
  );

export const registerUserSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(2, "Name must be at least 2 characters long"),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address"),
  password: passwordValidation,
  role: z.enum(["CONTRACTOR", "WORKER"]),
  mobile: z
    .string({ message: "Mobile number is required" })
    .trim()
    .regex(/^[6-9]\d{9}$/, "Invalid mobile number"),

  address: z
    .object({
      addressLine1: z.string().optional(),
      addressLine2: z.string().optional(),
      city: z.string({ message: "City is required" }),
      state: z.string({ message: "State is required" }),
      pincode: z.string({ message: "Pincode is required" }),
      country: z.string({ message: "Country is required" }),
    })
    .optional(),
});

export const loginUserSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address"),
  password: passwordValidation,
});
