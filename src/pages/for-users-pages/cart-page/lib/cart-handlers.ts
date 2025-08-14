import { CartItem } from "@/shared/types/types";
import axios from "@/shared/axios";

const getCart = (): CartItem[] =>
  JSON.parse(localStorage.getItem("cart") || "[]");

export const updateLocalStorage = (
  updatedCart: CartItem[],
  onUpdate?: () => void,
) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  onUpdate?.();
};

export const updateCart = (
  newCount: number,
  data: CartItem,
  setCount: (n: number) => void,
  onUpdate?: () => void,
) => {
  const cart = getCart();
  const updated = cart.map((item) =>
    item.id === data.id ? { ...item, count: newCount } : item,
  );
  updateLocalStorage(updated, onUpdate);
  setCount(newCount);
};

export const toggleActive = (
  data: CartItem,
  setActive: (b: boolean) => void,
  onUpdate?: () => void,
) => {
  const cart = getCart();
  const updated = cart.map((item) =>
    item.id === data.id ? { ...item, active: !item.active } : item,
  );
  updateLocalStorage(updated, onUpdate);
  setActive(!data.active);
};

export const removeFromCart = (data: CartItem, onUpdate?: () => void) => {
  const cart = getCart();
  const updated = cart.filter((item) => item.id !== data.id);
  updateLocalStorage(updated, onUpdate);
};

export const decrease = (
  e: React.MouseEvent,
  count: number,
  data: CartItem,
  setCount: (n: number) => void,
  onUpdate?: () => void,
) => {
  e.preventDefault();
  if (count > 1) updateCart(count - 1, data, setCount, onUpdate);
};

export const increase = (
  e: React.MouseEvent,
  count: number,
  data: CartItem,
  setCount: (n: number) => void,
  onUpdate?: () => void,
) => {
  e.preventDefault();
  updateCart(count + 1, data, setCount, onUpdate);
};

export const handleCartUpdate = (
  setCart: (cart: CartItem[]) => void,
  setActiveProducts: (active: CartItem[]) => void,
) => {
  try {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    const validCart = Array.isArray(data) ? data : [];
    const activated = validCart.filter((i) => i.active === true);
    setCart(validCart);
    setActiveProducts(activated);
  } catch {
    setCart([]);
    setActiveProducts([]);
  }
};

interface HandleOrderParams {
  cart: CartItem[];
  finalTotal: number;
  deliveryType: string;
  customerId: string;
  onSuccess: (orderId: string) => void;
  onError?: (err: any) => void;
}

export const handleOrder = async ({
  cart,
  finalTotal,
  deliveryType,
  customerId,
  onSuccess,
  onError,
}: HandleOrderParams) => {
  const activeItems = cart.filter((item) => item.active);
  const orderItems = activeItems.map((item) => ({
    food_item: item.id,
    quantity: item.count,
  }));

  const payload = {
    customer: customerId,
    order_items: orderItems,
    total_price: finalTotal,
    status: "pending",
    delivery_status:
      deliveryType === "pick up"
        ? "self_get"
        : deliveryType === "deliver"
          ? "by_currier"
          : "self_get",
  };

  try {
    const res = await axios.post("/order/orders/", payload);
    localStorage.removeItem("cart");
    onSuccess(res.data.id);
  } catch (err) {
    console.error("Order error", err);
    onError?.(err);
  }
};
