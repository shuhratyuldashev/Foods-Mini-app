import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { FoodFormData } from "../models/form";
import { Category } from "@/shared/types/types";

interface Props {
  form: UseFormReturn<FoodFormData>;
  categories: Category[];
  imageBase64: string | null;
  handleUploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (values: FoodFormData) => void;
  type: "post" | "put";
}

const AddNewFoodForm = ({
  form,
  categories,
  imageBase64,
  handleUploadImage,
  onSubmit,
  type,
}: Props) => (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-3"
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sarlavha</FormLabel>
            <FormControl>
              <Input placeholder="Sarlavha" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div>
        <FormLabel htmlFor="image">Rasm</FormLabel>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleUploadImage}
        />
        {imageBase64 && (
          <img
            src={imageBase64}
            alt="Rasm"
            className="mt-2 max-w-20 aspect-square object-cover w-full h-auto rounded"
          />
        )}
      </div>
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Kategoriya</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Kategoriyani tanlang" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Narxi</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Narx"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tavsif</FormLabel>
            <FormControl>
              <Textarea placeholder="Tavsif..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <button
        type="submit"
        className="mt-2 bg-primary p-3 font-semibold text-sm text-white rounded-full"
      >
        {type === "post" ? "Qo'shish" : "Saqlash"}
      </button>
    </form>
  </Form>
);

export default AddNewFoodForm;
