import { Category, Product } from "@/shared/types/types";
import axios from "@/shared/axios";
import React from "react";

export const useFetchCategories = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/food/categories/");
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchCategories();
  }, []);

  return categories;
};

export const useFetchProducts = (categoryId?: string) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/food/items", {
          params: categoryId ? { category_id: categoryId } : {}, // ✔ работает
        });
        setProducts(response.data.results);
      } catch (error) {
        console.error("Mahsulotlarni olishda xatolik:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return products;
};
