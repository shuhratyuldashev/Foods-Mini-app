import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNewCategorySchema } from "../models/schema";
import { onSubmitAddNewCategory } from "../lib/on-submit-add-category";

type CategoryForm = z.infer<typeof addNewCategorySchema>;

interface AddNewCategoryFormProps {
  type: "post" | "put";
  categoryId?: string;
  initialData?: Partial<CategoryForm>;
}

const AddNewCategoryForm = ({
  type,
  categoryId,
  initialData,
}: AddNewCategoryFormProps) => {
  const form = useForm<CategoryForm>({
    resolver: zodResolver(addNewCategorySchema),
    defaultValues: { name: initialData?.name ?? "" },
  });

  const handleSubmit = (values: CategoryForm) => {
    onSubmitAddNewCategory(values, type, categoryId);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kategoriya nomi</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Masalan: Lavashlar" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>Rasm</FormLabel>
          <Input type="file" accept="image/*" disabled />{" "}
          {/* Пока не используется */}
        </FormItem>

        <button
          type="submit"
          className="bg-primary text-white p-3 rounded-full font-semibold text-sm"
        >
          {type === "post" ? "Kategoriya qo'shish" : "O'zgarishlarni saqlash"}
        </button>
      </form>
    </Form>
  );
};

export default AddNewCategoryForm;
