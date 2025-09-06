import bg from "@/shared/assets/images/bg-home.png";
import BottomBar from "@/widgets/bottombar";
import HeroHomePage from "./ui/hero-home-page";
import CategoriesList from "./ui/categories-list";
import ProductsList from "./ui/products-list";
import React from "react";
import { useFetchCategories, useFetchProducts } from "@/shared/hooks/useFoods";

const ProductsPage = () => {
  const [currentCategory, setCurrentCategory] = React.useState<string>("");

  const products = useFetchProducts(currentCategory);
  const categories = useFetchCategories();
  const route = window.location.pathname;

  return (
    <main className="bg-[radial-gradient(circle_at_left,_rgba(255,165,0,0.3)_0%,_white_25%)]">
      <HeroHomePage bg={bg} />

      <section className="p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-lg">Turkumlar bo‘yicha</p>
          <span
            className="font-medium text-primary cursor-pointer"
            // onClick={() => setCurrentCategory("")}
            onClick={() => {
              window.open("http://192.168.0.180:5173/", "_blank"); // yangi tabda ochiladi
            }}
          >
            Hammasi
          </span>
        </div>
        {/* Routelarni ko'rsatish uchun */}
        <div className="mb-4">
          <span className="text-gray-500 text-sm">
            {route}
          </span>
        </div>

        <CategoriesList
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={(id) => {
            const newCategory = id === currentCategory ? "" : id;
            setCurrentCategory(newCategory);
          }}
        />

        <ProductsList data={products} />
      </section>

      <BottomBar currentPage="Bosh sahifa" />
    </main>
  );
};

export default ProductsPage;
