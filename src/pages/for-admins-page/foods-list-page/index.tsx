import { Link } from "react-router-dom";
import BottomBar from "@/widgets/bottombar";
import HeaderFoodsListPage from "./ui/header-list-page";
import { Category, Product } from "@/shared/types/types";
import DrawerAddNewCategory from "@/features/add-new-category";
import { useFetchCategories, useFetchProducts } from "@/shared/hooks/useFoods";
import axios from "@/shared/axios";

const FoodsListPage = () => {
  const products = useFetchProducts();
  const categories = useFetchCategories();

  const handleDeleteCategory = async (id: string) => {
    try {
      console.log(id);
      await axios.delete(`/food/categories/${id}/`);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <main className="p-4">
      <HeaderFoodsListPage />

      <section className="mt-4 flex flex-col gap-2">
        {products?.map((f) => (
          <FoodCard key={f.id} {...f} />
        ))}
      </section>

      <section className="mt-8 my-20 flex flex-col gap-2">
        <DrawerAddNewCategory type="post" />
        {categories?.map((c: Category) => (
          <div
            key={c.id}
            className="w-full px-4 py-2 flex items-center justify-between border rounded-md"
          >
            <p className="font-semibold text-sm">{c.name}</p>
            <div className="flex gap-2">
              <DrawerAddNewCategory categoryId={c.id} type="put" />
              <button
                onClick={() => handleDeleteCategory(c.id)}
                className="p-2 border rounded-full text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951ZM10.364 3.026a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>

      <BottomBar isForAdmin currentPage="Mahsulotlar" />
    </main>
  );
};

export const FoodCard = ({ id, image, name, category, price }: Product) => {
  const formattedPrice = price.toLocaleString();

  return (
    <Link
      to={`/foods/${id}`}
      className="p-2 flex items-center gap-3 rounded-md w-full border border-slate-100 transition"
    >
      <div className="w-16 aspect-square shrink-0">
        {image ? (
          <img
            src={`${import.meta.env.VITE_MEDIA_URL}/media/images/${image}`}
            alt={name}
            className="rounded-md object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full rounded-md bg-gray-200 flex items-center justify-center text-xs text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-base">{name}</h2>
        <div className="flex gap-2 text-sm text-gray-500">
          <span className="text-primary font-bold">{formattedPrice} UZS</span>
          <span>/ {category?.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default FoodsListPage;
