import product_cover from "../../shared/assets/images/img-product-card.png";
import React from "react";
import HeaderProductPage from "./ui/header-product-page";
import { Separator } from "../../shared/ui/separator";
import InfoSectionProductPage from "./ui/info-section-product-page";
import ProductsList from "../products-page/ui/products-list";

export interface ProductType {
  title: string;
  price: string;
  description: string;
  grade: number;
  imgs: string[];
}

const data: ProductType = {
  title: "Burger With Meat 🍔",
  price: "$ 12,230",
  description:
    "Burger With Meat is a typical food from our restaurant that is much in demand by many people, this is very recommended for you.",
  grade: 4.5,
  imgs: [product_cover, product_cover, product_cover],
};

const ProductPage = () => {
  const [currentPhoto, setCurrentPhoto] = React.useState<number>(0);
  const [counts, setCounts] = React.useState<number>(0);
  return (
    <main className="p-4 bg-gradient-to-br from-white via-orange-50 to-white">
      <HeaderProductPage
        currentPhoto={currentPhoto}
        imgs={data.imgs}
        setCurrentPhoto={setCurrentPhoto}
      />

      <InfoSectionProductPage {...data} />

      <section className="p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">Recommend For You</p>
          <span className="font-medium text-primary">See All</span>
        </div>

        <ProductsList count={2} />
      </section>

      <footer className="flex justify-between fixed bottom-0 bg-white shadow-2xl left-0 right-0 p-4">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setCounts((prev) => counts && prev - 1)}
            className="rounded-full p-2 border flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <h2>{counts}</h2>
          <button
            onClick={() => setCounts((prev) => prev + 1)}
            className="rounded-full p-2 border flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <button className="flex ml-3 justify-center gap-4 items-center w-full bg-primary text-white rounded-full font-semibold p-4">
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          Add to Cart
        </button>
      </footer>
    </main>
  );
};

export default ProductPage;
