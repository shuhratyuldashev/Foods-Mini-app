import { CartItem, Product } from "@/shared/types/types";
import axios from "@/shared/axios";


export const addToCart = (product: Product, counts: number) => {
  if (!product || counts < 1) return;

  let cart: CartItem[] = [];

  try {
    const stored = localStorage.getItem("cart");
    cart = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(cart)) cart = [];
  } catch {
    cart = [];
  }

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.count += counts;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product?.image,
      count: counts,
      active: true,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};



export const fetchProduct = async (id: string): Promise<Product> => {
  const res = await axios.get(`/food/item/${id}`);
  return res.data;
};

export const fetchRecommendations = async (
  categoryId: string,
): Promise<Product[]> => {
  const res = await axios.get("/food/items", {
    params: { category_id: categoryId, page_size: 2 },
  });
  return res.data.results;
};

