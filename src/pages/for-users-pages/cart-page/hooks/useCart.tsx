import React from "react";
import { CartItem } from "@/shared/types/types";

export const useCart = () => {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [activeProducts, setActiveProducts] = React.useState<CartItem[]>([]);

  const discount = 0;

  const total = React.useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.count, 0),
    [cart],
  );

  const finalTotal = React.useMemo(() => total - discount, [total, discount]);

  React.useEffect(() => {
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
  }, []);

  return {
    cart,
    activeProducts,
    total,
    discount,
    finalTotal,
    isEmpty: cart.length === 0,
    setCart,
    setActiveProducts,
  };
};

export const useCartItem = (data: CartItem, onUpdate?: () => void) => {
  const [count, setCount] = React.useState<number>(data.count);
  const [active, setActive] = React.useState<boolean>(data.active || false);

  React.useEffect(() => {
    setCount(data.count);
    setActive(data.active || false);
  }, [data]);

  const totalPrice = data.price * count;

  return {
    count,
    active,
    totalPrice,
  };
};
