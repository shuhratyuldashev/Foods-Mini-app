import { useEffect, useState } from "react";
import { Product } from "@/shared/types/types";
import { fetchProduct, fetchRecommendations } from "../lib/cart-handlers";


export const useFetchProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const prod = await fetchProduct(id);
        setProduct(prod);
      } catch (e) {
        console.error("Failed to fetch product:", e);
      }
    };

    fetchData();
  }, [id]);

  return { product };
};

export const useFetchRecommendations = (categoryId?: string) => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  useEffect(() => {
    if (!categoryId) return;

    const fetchData = async () => {
      try {
        const recs = await fetchRecommendations(categoryId);
        setRecommendations(recs);
      } catch (e) {
        console.error("Failed to fetch recommendations:", e);
      }
    };

    fetchData();
  }, [categoryId]);

  return { recommendations };
};
