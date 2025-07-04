import { Checkbox } from "@/shared/ui/checkbox";
import burger_photo from "@/shared/assets/images/img-product-card.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartCard = () => {
  const [count, setCount] = useState<number>(1);
  return (
    <Link
      to="/products/1"
      className="py-2 px-4 bg-white flex items-center gap-3 rounded-md shadow-sm"
    >
      <div>
        <Checkbox defaultChecked />
      </div>
      <div className="w-20 aspect-square">
        <img
          src={burger_photo}
          className="object-cover w-full h-full rounded"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div>
          <h2 className="font-semibold text-lg">Burger With Meat</h2>
          <p className="text-primary text-sm font-bold">$ 12,230</p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setCount(count === 1 ? count : count - 1);
              }}
              className="p-1 rounded-full border bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <p className="text-sm">{count}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setCount(count + 1);
              }}
              className="p-1 rounded-full border bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <button className="text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CartCard;
