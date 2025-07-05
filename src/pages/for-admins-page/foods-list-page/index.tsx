import BottomBar from "@/widgets/bottombar";
import HeaderFoodsListPage from "./ui/header-list-page";
import { Link } from "react-router-dom";
import { foods_list } from "@/shared/constants/foods-list";



const FoodsListPage = () => {
  return (
    <main className="p-4">
      <HeaderFoodsListPage />
      <section className="mt-4 flex flex-col gap-2">
        {foods_list.map((f) => (
          <FoodCard key={f.id} {...f} />
        ))}
      </section>
      <BottomBar isForAdmin currentPage="foods" />
    </main>
  );
};

export const FoodCard = ({
  id,
  img,
  title,
  rating,
  price,
}: {
  id: number;
  img: string;
  title: string;
  rating: number;
  price: string;
}) => (
  <Link
    to={`/foods/${id}`}
    className="p-2 flex items-center gap-2 rounded-md w-full border"
  >
    <div className="w-16 aspect-square">
      <img src={img} className="rounded-md object-cover w-full h-full" alt="" />
    </div>
    <div>
      <h1 className="font-semibold">{title}</h1>
      <p className="font-bold text-gray-500 text-sm">
        <div className="flex gap-2">
          <span className="text-primary">{price}</span>/{" "}
          <span className="text-primary flex gap-2">
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
            {rating}
          </span>
        </div>
      </p>
    </div>
  </Link>
);
export default FoodsListPage;
