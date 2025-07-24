import img from "@/shared/assets/images/img-product-card.png";
import HeaderFoodPage from "./ui/header-food-page";
import { useState } from "react";

const FoodPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <main className="p-4 flex flex-col gap-2">
      <HeaderFoodPage />

      <div className="p-2.5 border rounded-md flex flex-col gap-2 w-full">
        <h2 className="font-semibold">Rasm:</h2>
        <div className="w-full aspect-square">
          <img
            src={img}
            className="rounded-md w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="p-2.5 border rounded-md flex justify-between items-center w-full">
        <h2 className="font-semibold">Sarlavha:</h2>
        <p className="font-bold text-gray-500 text-sm">Choyxona oshi</p>
      </div>

      <div className="w-full flex gap-x-2.5">
        <div className="p-2.5 border rounded-md flex justify-between items-center w-full">
          <h2 className="font-semibold">Bahosi:</h2>
          <p className="font-bold flex gap-1 text-primary text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            4,9
          </p>
        </div>
        <div className="p-2.5 border rounded-md flex justify-between items-center w-full">
          <h2 className="font-semibold">Narxi:</h2>
          <p className="font-bold text-primary text-sm">25,000 UZS</p>
        </div>
      </div>
      <div className="p-2.5 border rounded-md flex flex-col w-full">
        <h2 className="font-semibold">Tafsiv:</h2>
        <p className="font-bold text-gray-500 text-sm">
          Choyxona oshi — milliy oshimizning klassik turi bo‘lib, ko‘pchilik
          tomonidan seviladi. Albatta, sinab ko‘rishga arziydi!
        </p>
      </div>

      <div className="mt-14">
        {isActive ? (
          <button onClick={() => setIsActive(!isActive)} className="rounded-full p-4 flex items-center justify-center bg-primary font-semibold w-full text-white">Taomni O'chirish</button>
        ) : (
          <button onClick={() => setIsActive(!isActive)} className="rounded-full p-4 flex items-center justify-center border-2 font-semibold w-full text-primary">Taomni Yoqish</button>
        )}
      </div>
    </main>
  );
};

export default FoodPage;
