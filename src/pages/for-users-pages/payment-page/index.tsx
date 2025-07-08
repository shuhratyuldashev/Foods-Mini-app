import HeaderPaymentPage from "./ui/header-payment-page";
import burger_photo from "@/shared/assets/images/img-product-card.png";
import { Separator } from "@/shared/ui/separator";
import {
  payment_deliver_constants,
  payment_details_constants,
} from "./constants/payment-fulll-details-list";
// import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <main className="p-4">
      <HeaderPaymentPage />

      <section className="flex flex-col mt-4">
        <p className="text-gray-400 text-sm">Siz yaxshiroq taomga loyiqsiz</p>

        <h2 className="font-semibold text-base">
          Buyurtma berilgan mahsulotlar
        </h2>

        <div className="flex items-center">
          <div className="w-18 my-4 h-14">
            <img
              className="w-full h-full rounded-md object-cover"
              src={burger_photo}
              alt=""
            />
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col ml-2 justify-between">
              <h2 className="font-semibold">Choyxona Oshi</h2>
              <p className="text-sm text-primary font-bold">250,000 UZS</p>
            </div>
            <p className="text-gray-400 text-sm font-medium">14 ta mahsulot</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-base">Buyurtma tafsilotlari</h2>
          {payment_details_constants.map((d) => (
            <div
              key={d.id}
              className="w-full mt-2 flex justify-between items-center"
            >
              <p>{d.title}</p>
              <span className="font-semibold">{d.count}</span>
            </div>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col">
          <h2 className="font-semibold text-base">Buyurtmachi tafsilotlari</h2>
          {payment_deliver_constants.map((d) => (
            <div
              key={d.id}
              className="w-full mt-2 flex justify-between items-center"
            >
              <p>{d.title}</p>
              <span className="font-semibold">{d.detail}</span>
            </div>
          ))}
        </div>

        {/* <Link to="/order">
          <button className="p-4 w-full text-center bg-primary text-white font-semibold rounded-full mt-16">
            Chackout Now
          </button>
        </Link> */}
      </section>
    </main>
  );
};

export default PaymentPage;
