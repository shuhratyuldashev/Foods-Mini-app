import { z } from "zod";

export const translateSchema = z.object({
  text: z.string().max(100, "Максимальное количество символов 100"),
});

export type TranslateFormValues = z.infer<typeof translateSchema>;
