import { z } from "zod";

export const addNewCategorySchema = z.object({
  name: z.string().min(1, "Kategoriya nomi majburiy"),
  image: z.any().optional(), // если будешь загружать файл
});

export type CategoryForm = z.infer<typeof addNewCategorySchema>;
