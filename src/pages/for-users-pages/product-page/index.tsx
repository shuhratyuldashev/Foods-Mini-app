import React from "react";
import HeaderProductPage from "./ui/header-product-page";
import InfoSectionProductPage from "./ui/info-section-product-page";
import ProductsList from "../products-page/ui/products-list";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "./lib/cart-handlers";
import {
  useFetchProduct,
  useFetchRecommendations,
} from "./hooks/useFetchProduct";
import FooterActions from "./ui/product-footer-actions";

const ProductPage = () => {
  const { id } = useParams();
  const { product } = useFetchProduct(String(id));
  const { recommendations } = useFetchRecommendations(product?.category?.id);
  const [counts, setCounts] = React.useState<number>(0);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, counts);
  };

  return (
    <main className="bg-[radial-gradient(circle_at_right,_rgba(255,165,0,0.3)_0%,_white_20%)]">
      <div className="p-4">
        {product && (
          <>
            <HeaderProductPage img={product.image ?? null} />
            <InfoSectionProductPage
              title={product.name}
              price={product.price}
              description={product.description}
            />
          </>
        )}

        {recommendations.length > 0 && (
          <section className="p-4 pb-20">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">Sizga tavsiya beramiz</p>
              <Link to="/" className="font-medium text-primary">
                Hammasi
              </Link>
            </div>
            <ProductsList data={recommendations} />
          </section>
        )}
      </div>

      {product && (
        <FooterActions
          product={product}
          counts={counts}
          setCounts={setCounts}
          onAddToCart={handleAddToCart}
        />
      )}
    </main>
  );
};

export default ProductPage;
