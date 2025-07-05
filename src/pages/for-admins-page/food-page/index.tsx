import img from "@/shared/assets/images/img-product-card.png";
import HeaderFoodPage from "./ui/header-food-page";

const FoodPage = () => {
  return (
    <main className="p-4 flex flex-col gap-2">
      <HeaderFoodPage />

      <div className="p-2.5 border rounded-md flex flex-col gap-2 w-full">
        <h2 className="font-semibold">Image:</h2>
        <div className="w-full aspect-square">
          <img
            src={img}
            className="rounded-md w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="p-2.5 border rounded-md flex justify-between items-center w-full">
        <h2 className="font-semibold">Title:</h2>
        <p className="font-bold text-gray-500 text-sm">Ordinary burger</p>
      </div>

      <div className="w-full flex gap-x-2.5">
        <div className="p-2.5 border rounded-md flex justify-between items-center w-full">
          <h2 className="font-semibold">Rating:</h2>
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
          <h2 className="font-semibold">Price:</h2>
          <p className="font-bold text-primary text-sm">$ 17,230</p>
        </div>
      </div>
      <div className="p-2.5 border rounded-md flex flex-col w-full">
        <h2 className="font-semibold">Description:</h2>
        <p className="font-bold text-gray-500 text-sm">
          Burger With Meat is a typical food from our restaurant that is much in
          demand by many people, this is very recommended for you.
        </p>
      </div>
    </main>
  );
};

export default FoodPage;
