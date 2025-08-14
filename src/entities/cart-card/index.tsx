import { Checkbox } from "@/shared/ui/checkbox";
import { CartItem } from "@/shared/types/types";
import { Link } from "react-router-dom";
import {
  toggleActive,
  removeFromCart,
  decrease,
  increase,
} from "@/pages/for-users-pages/cart-page/lib/cart-handlers";
import React from "react";
import CartCardFooter from "./ui/cart-card-footer";
import CartCardImage from "./ui/cart-card-image";
import CartCardInfo from "./ui/cart-card-info";

const CartCard = ({
  data,
  onUpdate,
}: {
  data: CartItem;
  onUpdate?: () => void;
}) => {
  const [active, setActive] = React.useState<boolean>(Boolean(data.active));
  const [count, setCount] = React.useState<number>(data.count);
  const formattedPrice = (data.price * count).toLocaleString();

  return (
    <Link
      to={`/products/${data.id}`}
      className="py-2 px-4 bg-white flex items-center gap-3 rounded-md shadow-sm shadow-slate-100"
    >
      <Checkbox
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleActive(data, setActive, onUpdate);
        }}
        checked={active}
      />
      <CartCardImage image={data.image} name={data.name} />
      <div className="flex flex-col gap-2 w-full">
        <CartCardInfo name={data.name} price={formattedPrice} />
        <CartCardFooter
          decrease={decrease}
          increase={increase}
          removeFromCart={removeFromCart}
          data={data}
          count={count}
          setCount={setCount}
          onUpdate={onUpdate}
        />
      </div>
    </Link>
  );
};

export default CartCard;
