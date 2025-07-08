import BottomBar from "@/widgets/bottombar";
import img_no_result from "@/shared/assets/images/no-results-img.png";
import { Link } from "react-router-dom";
import HeaderCart from "./ui/header-cart";
import CartCard from "@/entities/cart-card";
import { useState } from "react";
import OrderModal from "./ui/order-modal";

const payments_consts = [
  {
    id: 1,
    label: "Jami mahsulotlar",
    price: "180 000 UZS",
  },
  {
    id: 2,
    label: "Yetkazib berish narxi",
    price: "Bepul",
  },
  {
    id: 3,
    label: "Chegirmalar",
    price: "-30 000 UZS",
  },
  {
    id: 4,
    label: "Jami",
    price: "150 000 UZS",
  },
];

const CartPage = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  return (
    <main>
      <div className="p-4">
        <HeaderCart />

        {/* <section className="flex flex-col items-center mt-32">
        <img src={img_no_result} alt="img_no_result" />
        <h1 className="font-bold text-2xl">Ouch! Hungry</h1>
        <p className="text-gray-400 text-center mt-2">
          Seems like you have not ordered any food yet
        </p>
        <Link to="/products" className="w-full">
          <button className="w-full bg-primary text-white rounded-full font-semibold p-4 transition duration-500 active:scale-90 mt-10">
            Find Foods
          </button>
        </Link>
      </section> */}

        <section className="flex gap-3 flex-col mt-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <CartCard key={i} />
          ))}
        </section>

        <section className="mt-10 border p-4 rounded-2xl">
          <h2 className="font-semibold text-lg">Umumiy to'lov</h2>

          <div className="flex flex-col gap-2">
            {payments_consts.map((p) => (
              <div key={p.id} className="flex justify-between w-full">
                <p className="text-gray-500 font-medium">{p.label}</p>
                <p className="font-bold">{p.price}</p>
              </div>
            ))}
          </div>
        </section>
        <button
          className="w-full rounded-full p-4 text-white font-semibold bg-primary mt-4 mb-16"
          onClick={() => setIsPaymentModalOpen(true)}
        >
          Buyurtma berish
        </button>
        <OrderModal
          isOpen={isPaymentModalOpen}
          handleClose={() => setIsPaymentModalOpen(false)}
        />
      </div>

      <BottomBar currentPage="Savat" />
    </main>
  );
};

export default CartPage;
