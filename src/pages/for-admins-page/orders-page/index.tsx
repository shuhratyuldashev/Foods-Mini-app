import BottomBar from "@/widgets/bottombar";
import axios from "@/shared/axios";
import React from "react";
import { Order } from "@/shared/types/types";
import OrderCard from "@/entities/order-card";

const SalesPage = () => {
  const [orders, setOrders] = React.useState<Order[]>([])
  const fetchOrders = async () => {
    const res = await axios.get("/order/orders")
    console.log(res.data)
    if (res.status === 200) {
      setOrders(res.data.results)
    }
  }

  React.useEffect(() => {
    fetchOrders()
  }, [])
  return (
    <main className="p-4">
      <h1 className=" text-center my-4 font-semibold">Buyurtmalar</h1>

      <div className="mt-5 mb-20 flex flex-col gap-4">
        {orders.map((o) => (
          <OrderCard order={o} />
        ))}
      </div>
      <BottomBar isForAdmin currentPage="orders" />
    </main>
  );
};

export default SalesPage;
