import z from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title too long"),
  description: z.string().max(500, "Description is too long"),
});

export type TaskFormData = z.infer<typeof taskSchema>;
