import React from "react";
import { Link, useParams } from "react-router-dom";

const HeaderMyOrderPage = () => {
  const orderId = useParams().id;
  return (
    <header className="flex items-center mt-5">
      <Link to="/staff/my-orders">
        <button className="rounded-full p-2 border flex justify-center items-center">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </Link>
      <p className="font-semibold text-sm mx-auto  text-gray-500">
        Buyurtma IDsi <span className="text-black">
          {/* order id */}
          {orderId?.split("-")[0]}
        </span>
      </p>
    </header>
  );
};

export default HeaderMyOrderPage;
