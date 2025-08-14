import axios from "@/shared/axios";
import { CategoryForm } from "../models/schema";

export const onSubmitAddNewCategory = async (
  values: CategoryForm,
  type: "post" | "put",
  categoryId?: string,
) => {
  try {
    if (type === "post") {
      await axios.post("/food/categories/", values);
    } else if (type === "put" && categoryId) {
      await axios.put(`/food/categories/${categoryId}/`, values);
    } else {
      console.error("PUT uchun categoryId kerak");
      return;
    }
    window.location.reload();
  } catch (err) {
    console.error("Kategoriya yuborishda xatolik:", err);
  }
};
