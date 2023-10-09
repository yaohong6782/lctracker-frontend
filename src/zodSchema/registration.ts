import { z } from "zod";

export const RegistrationSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(3, { message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  role: z.string().min(1, { message: "Please select a role" }),
});
