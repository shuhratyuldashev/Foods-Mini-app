import HeaderFoodPage from "./ui/header-food-page";
import { useState } from "react";
import { useFetchProduct } from "@/pages/for-users-pages/product-page/hooks/useFetchProduct";
import { useParams } from "react-router-dom";

const FoodPage = () => {
  const { id } = useParams();
  const { product } = useFetchProduct(String(id));

  const [isActive, setIsActive] = useState<boolean>(false);

  if (!product) {
    return (
      <main className="p-4">
        <p className="text-center text-gray-500 mt-10">Yuklanmoqda...</p>
      </main>
    );
  }

  return (
    <main className="p-4 flex flex-col gap-2">
      <HeaderFoodPage id={String(id)} />

      <div className="p-2.5 border rounded-md flex flex-col gap-2 w-full">
        <h2 className="font-semibold">Rasm:</h2>
        <div className="w-full aspect-square">
          {product.image ? (
            <img
              src={`/media/images/${product.image}`}
              className="rounded-md w-full h-full object-cover"
              alt={product.name}
            />
          ) : (
            <div className="w-full h-full rounded-md bg-gray-200 flex items-center justify-center text-sm text-gray-500">
              Rasm mavjud emas
            </div>
          )}
        </div>
      </div>

      <div className="p-2.5 border rounded-md flex justify-between items-center w-full">
        <h2 className="font-semibold">Sarlavha:</h2>
        <p className="font-bold text-gray-500 text-sm">{product.name}</p>
      </div>

      <div className="w-full flex gap-x-2.5">
        <div className="p-2.5 border rounded-md flex flex-col items-start justify-between w-full">
          <h2 className="font-semibold">Kategoriyasi:</h2>
          <p className="font-bold text-primary text-sm">
            {product.category?.name || "Nomaʼlum"}
          </p>
        </div>
        <div className="p-2.5 border flex-col rounded-md flex justify-between w-full">
          <h2 className="font-semibold">Narxi:</h2>
          <p className="font-bold text-primary text-sm">
            {product.price.toLocaleString()} UZS
          </p>
        </div>
      </div>

      <div className="p-2.5 border rounded-md flex flex-col w-full">
        <h2 className="font-semibold">Tavsif:</h2>
        <p className="font-bold text-gray-500 text-sm">
          {product.description || "Tavsif mavjud emas"}
        </p>
      </div>

      <div className="mt-14">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`rounded-full p-4 flex items-center justify-center w-full font-semibold transition ${isActive
              ? "bg-primary text-white"
              : "border-2 border-primary text-primary"
            }`}
        >
          {isActive ? "Taomni Oʻchirish" : "Taomni Yoqish"}
        </button>
      </div>
    </main>
  );
};

export default FoodPage;
