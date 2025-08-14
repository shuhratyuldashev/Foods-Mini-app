import { z } from "zod";

export const foodFormSchema = z.object({
  name: z.string().min(1).max(255),
  price: z.coerce.number().gt(0, "Narx 0 dan katta bo'lishi kerak"),
  description: z.string(),
  category: z.string().uuid(),
  image: z.string().optional(),
});

export type FoodFormData = z.infer<typeof foodFormSchema>;
