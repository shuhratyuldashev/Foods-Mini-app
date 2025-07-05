import bg from "@/shared/assets/images/bg-home.png";
import BottomBar from "@/widgets/bottombar";
import HeroHomePage from "./ui/hero-home-page";
import { useState } from "react";
import CategoriesList from "./ui/categories-list";
import { products_categories } from "./constants/products-categories-list";
import ProductsList from "./ui/products-list";

const ProductsPage = () => {
  const [currentCategory, setCurrentCategory] = useState<number>(1);

  return (
    <main className="bg-[radial-gradient(circle_at_left,_rgba(255,165,0,0.3)_0%,_white_25%)]">
      <HeroHomePage bg={bg} />
      <section className="p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">Find by category</p>
          <span className="font-medium text-primary">See All</span>
        </div>

        <CategoriesList
          products_categories={products_categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />

        <ProductsList count={8} />
      </section>
      <BottomBar currentPage="Home" />
    </main>
  );
};

export default ProductsPage;
