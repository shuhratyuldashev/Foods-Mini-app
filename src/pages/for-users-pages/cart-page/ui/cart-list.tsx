import CartCard from "@/entities/cart-card";
import { CartItem } from "@/shared/types/types";

const CartList = ({
  cart,
  onUpdate,
}: {
  cart: CartItem[];
  onUpdate: () => void;
}) => (
  <section className="flex gap-3 flex-col mt-10">
    {cart.map((item) => (
      <CartCard key={item.id} data={item} onUpdate={onUpdate} />
    ))}
  </section>
);

export default CartList;
