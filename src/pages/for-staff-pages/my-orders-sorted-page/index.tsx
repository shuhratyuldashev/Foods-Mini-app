import OrderCard from "@/entities/order-card";
import HeaderMyOrdersSortedPage from "./ui/header-my-orders-sorted-page";
import { useParams } from "react-router-dom";
import { Order } from "@/shared/types/types";

const MyOrdersSortedPage = () => {
  const { type } = useParams<string>();

  return (
    <main className="bg-gradient-to-br p-4 min-h-screen from-white via-orange-50 to-white">
      <HeaderMyOrdersSortedPage type={`${type}`} />

      <div className="flex flex-col mt-5 gap-3">
        {/* {orders_list_consts.map((o: Order) => (
          <OrderCard order={o} key={o.id} {...o} />
        ))} */}
      </div>
    </main>
  );
};

export default MyOrdersSortedPage;
