import { z } from "zod";

export const employerSchema = z.object({
  username: z
    .string()
    .min(1, "Username majburiy")
    .max(150, "150 ta belgidan oshmasin")
    .regex(/^[\w.@+-]+$/, "Faqat harflar, raqamlar va @/./+/-/_"),

  fullname: z
    .string()
    .min(1, "To‘liq ism majburiy")
    .max(255, "255 ta belgidan oshmasin"),

  phone_number: z
    .string()
    .min(1, "Telefon raqami majburiy")
    .max(12, "12 ta belgidan oshmasin"),
});

export type EmployerFormData = z.infer<typeof employerSchema>;
