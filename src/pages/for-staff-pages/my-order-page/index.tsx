import { Separator } from "@/shared/ui/separator";
import HeaderMyOrderPage from "./ui/header-my-order.page";
import burger_photo from "@/shared/assets/images/img-product-card.png";
import {
  order_deliver_constants,
  order_details_constants,
} from "./constants/order_details_list";

const MyOrderPage = ({ locale }: { locale?: number[] }) => {
  return (
    <main className="p-4">
      <HeaderMyOrderPage />

      <section className="flex flex-col mt-4">
        <p className="text-gray-400 text-sm">Siz yaxshiroq taomga loyiqsiz</p>

        <h2 className="font-semibold text-base mt-4">Buyurtma qilingan taom</h2>

        <div className="flex items-center">
          <div className="w-18 my-4 h-14">
            <img
              className="w-full h-full rounded-md object-cover"
              src={burger_photo}
              alt="burger"
            />
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col ml-2 justify-between">
              <h2 className="font-semibold">Choyxona oshi</h2>
              <p className="text-sm text-primary font-bold">25,000 UZS</p>
            </div>
            <p className="text-gray-400 text-sm font-medium">14 ta mahsulot</p>
          </div>
        </div>

        <div className="flex justify-between my-2 font-medium">
          Holati:
          <span className="bg-gray-400 text-white text-sm font-semibold py-1 px-2 rounded-full">
            Bekor qilingan
          </span>
        </div>

        <div className="flex flex-col mt-4">
          <h2 className="font-semibold text-base">To‘lov tafsilotlari</h2>
          {order_details_constants.map((d) => (
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
          <h2 className="font-semibold text-base">Yetkazish tafsilotlari</h2>
          {order_deliver_constants.map((d) => (
            <div
              key={d.id}
              className="w-full mt-2 flex justify-between items-center"
            >
              <p>{d.title}</p>
              <span className="font-semibold">{d.detail}</span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3Aabcdef1234567890..."
            width="100%"
            height="400"
            title="Xarita"
          ></iframe>
        </div>

        <button className="p-4 w-full text-center mt-20 bg-primary text-white font-semibold text-sm rounded-full">
          Bajarildi deb belgilash
        </button>
      </section>
    </main>
  );
};

export default MyOrderPage;
