import React from "react";
import { useNavigate } from "react-router-dom";
import BottomBar from "@/widgets/bottombar";
import HeaderCart from "./ui/header-cart";
import EmptyCart from "./ui/empty-cart";
import CartList from "./ui/cart-list";
import CartTotalInfo from "./ui/cart-total-info";
import CartActions from "./ui/cart-actions";
import OrderModal from "./ui/order-modal";
import { useCart } from "./hooks/useCart";
import { handleCartUpdate, handleOrder } from "./lib/cart-handlers";

const CartPage = () => {
  const {
    cart,
    total,
    finalTotal,
    isEmpty,
    discount,
    setCart,
    setActiveProducts,
  } = useCart();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false);
  const [deliveryType, setDeliveryType] = React.useState("");
  const navigate = useNavigate();

  return (
    <main>
      <div className="p-4">
        <HeaderCart />

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <>
            <CartList
              cart={cart}
              onUpdate={() => handleCartUpdate(setCart, setActiveProducts)}
            />
            <CartTotalInfo
              total={total}
              discount={discount}
              finalTotal={finalTotal}
            />
            <CartActions
              deliveryType={deliveryType}
              setIsPaymentModalOpen={setIsPaymentModalOpen}
              handleOrder={() =>
                handleOrder({
                  cart,
                  finalTotal,
                  deliveryType,
                  customerId: "74ffb7f6-1ac8-4b29-ba5c-9517786e8532", // или динамически
                  onSuccess: (id) => {
                    localStorage.removeItem("cart");
                    setCart([]);
                    setActiveProducts([]);
                    navigate(`/order/${id}`);
                  },
                })
              }
              hasActiveItems={cart.some((item) => item.active)}
            />
            <OrderModal
              isOpen={isPaymentModalOpen}
              handleClose={() => setIsPaymentModalOpen(false)}
              onSelect={setDeliveryType}
            />
          </>
        )}
      </div>

      <BottomBar currentPage="Savat" />
    </main>
  );
};

export default CartPage;
