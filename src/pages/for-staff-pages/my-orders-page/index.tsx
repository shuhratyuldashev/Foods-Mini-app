import BottomBar from "@/widgets/bottombar";
import HeaderMyOrdersPage from "./ui/header-my-orders-page";
import SearchBarMyOrder from "@/features/search-bar-my-orders";
import OrderCard from "@/entities/order-card";
import { orders_list_consts } from "./constants/orders_list_consts";
import TotalOrders from "./ui/total-orders";

const MyOrdersPage = () => {
  return (
    <main className="bg-gradient-to-br min-h-screen from-white via-orange-50 to-white">
      <HeaderMyOrdersPage />
      <section className="p-4">
        <SearchBarMyOrder />

        <TotalOrders
          all_orders={31}
          delivering_orders={8}
          canceled_orders={5}
          completed_orders={18}
        />
        <div className="flex flex-col gap-3">
          {orders_list_consts.map((o) => (
            <OrderCard key={o.id} {...o} />
          ))}
        </div>
      </section>
      <BottomBar isForStaff currentPage="Buyurtmalarim" />
    </main>
  );
};

export default MyOrdersPage;
