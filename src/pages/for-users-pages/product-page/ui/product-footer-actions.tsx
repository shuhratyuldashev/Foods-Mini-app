import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/shared/types/types";

interface Props {
  product: Product;
  counts: number;
  setCounts: React.Dispatch<React.SetStateAction<number>>;
  onAddToCart: (product: Product, count: number) => void;
}

const FooterActions = ({ product, counts, setCounts, onAddToCart }: Props) => {
  return (
    <footer className="flex justify-between fixed bottom-0 bg-white shadow-2xl left-0 right-0 p-4">
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setCounts((prev) => (prev > 0 ? prev - 1 : 0))}
          className="rounded-full p-2 border flex justify-center items-center"
        >
          <MinusIcon />
        </button>
        <h2>{counts}</h2>
        <button
          onClick={() => setCounts((prev) => prev + 1)}
          className="rounded-full p-2 border flex justify-center items-center"
        >
          <PlusIcon />
        </button>
      </div>
      <Link to="/cart" className="w-full">
        <button
          onClick={() => onAddToCart(product, counts)}
          disabled={counts < 1}
          className="disabled:opacity-50 flex ml-3 justify-center gap-4 items-center w-full bg-primary text-white rounded-full font-semibold p-4"
        >
          <CartIcon />
          Savatga qo'shish
        </button>
      </Link>
    </footer>
  );
};

export default FooterActions;

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" strokeWidth={1.5}
       stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" strokeWidth={1.5}
       stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" strokeWidth={1.5}
       stroke="currentColor" className="size-5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);
