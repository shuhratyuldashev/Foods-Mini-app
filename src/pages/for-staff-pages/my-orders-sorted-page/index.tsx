import OrderCard from "@/entities/order-card";
import HeaderMyOrdersSortedPage from "./ui/header-my-orders-sorted-page";
import { useParams } from "react-router-dom";
import { orders_list_consts } from "../my-orders-page/constants/orders_list_consts";

const MyOrdersSortedPage = () => {
  const { type } = useParams();

  return (
    <main className="bg-gradient-to-br p-4 min-h-screen from-white via-orange-50 to-white">
      <HeaderMyOrdersSortedPage type={`${type}`} />

      <div className="flex flex-col mt-5 gap-3">
        {orders_list_consts.map((o) => (
          <OrderCard key={o.id} {...o} status={type} />
        ))}
      </div>
    </main>
  );
};

export default MyOrdersSortedPage;
