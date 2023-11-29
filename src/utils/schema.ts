import { z } from "zod";

export const personSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 chars" })
    .max(20, { message: "Name cant be over 20 chars" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "You must be equal or over 18 yrs" }),
});

export const expenseSchema = z.object({
  description: z
    .string({ invalid_type_error: "Description is required" })
    .min(1, { message: "Description should contain at least 1 char" })
    .max(30, { message: "Description cant be over 30 chars" }),
  cost: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .refine((value) => value >= 0, {
      message: "Amount must be a non-negative number",
    }),
  category: z.string({ invalid_type_error: "Category is required" }),
});
