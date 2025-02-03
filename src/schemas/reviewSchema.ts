import { z } from "zod";

export const reviewSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contact: z
    .string()
    .min(1, "Contact is required")
    .regex(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email address"
    ),
  review: z.string().min(10, "Review must be at least 10 characters"),
  rating: z
    .number()
    .min(1, "Rating is required")
    .max(5, "Rating must be between 1 and 5"),
  newsletter: z.boolean(),
});
