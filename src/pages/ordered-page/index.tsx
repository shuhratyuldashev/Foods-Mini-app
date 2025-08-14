import BottomBar from "@/widgets/bottombar";
import { useMyOrders } from "./hooks/useOrder";
import OrderCard from "@/entities/order-card";

const OrderedPage = () => {
  const { myOrders, addresses } = useMyOrders();

  return (
    <main>
      <section className="p-4 mb-20">
        <p className="text-center font-semibold mt-5">Mening Buyurtmalarim</p>

        <div className="mt-5 flex flex-col gap-4">
          {myOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              address={addresses[order.id]}
            />
          ))}
          {myOrders.length === 0 && <h1>No Orders</h1>}
        </div>
      </section>
      <BottomBar currentPage="Buyurtmalarim" />
    </main>
  );
};

export default OrderedPage;
