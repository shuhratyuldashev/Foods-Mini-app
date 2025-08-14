import { useEffect, useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/shared/axios";
import { Category } from "@/shared/types/types";
import { FoodFormData, foodFormSchema } from "../models/form";

interface Params {
  type: "post" | "put";
  initialData?: Partial<FoodFormData>;
  foodId?: string;
}

export const useAddOrUpdateFood = ({ type, initialData, foodId }: Params) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [imageBase64, setImageBase64] = useState<string | null>(
    initialData?.image ?? null,
  );
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Category[]>("/food/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Kategoriya olishda xatolik:", err));
  }, []);

  const form = useForm<FoodFormData>({
    resolver: zodResolver(foodFormSchema),
    defaultValues: initialData ?? {
      name: "",
      price: 0,
      description: "",
      category: "",
    },
  });

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = async () => {
    const result = reader.result as string;
    const base64 = result.split(",")[1];

    setImageBase64(result); 

    try {
      const res = await axios.post("/image-save/", {
        image: base64,
      });
      setFileName(`${res.data.file_name}`);
      console.log(res.data);
    } catch (err) {
      console.error("Image upload error", err);
    }
  };

  reader.readAsDataURL(file);
};

  const onSubmit = async (values: FoodFormData) => {
    const dataToSend: FoodFormData = {
      ...values,
      image: fileName ?? undefined,
    };

    try {
      if (type === "post") {
        await axios.post("/food/items/", dataToSend);
      } else if (type === "put" && foodId) {
        await axios.put(`/food/item/${foodId}/`, dataToSend);
      } else {
        console.error("PUT uchun foodId kerak");
        return;
      }
      window.location.reload();
    } catch (err) {
      console.error("Ma'lumot yuborishda xatolik:", err);
    }
  };

  return {
    categories,
    form,
    imageBase64,
    handleUploadImage,
    onSubmit,
  };
};
