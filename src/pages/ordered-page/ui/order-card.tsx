import { Link } from "react-router-dom";
import { Order, OrderItem } from "@/shared/types/types";

const getTotalQuantity = (items: OrderItem[]) =>
  items.reduce((sum, i) => sum + i.quantity, 0);

const OrderCardForUser = ({ order, address }: { order: Order; address?: string }) => {
  return (
    <Link to={`/order/${order.id}`}>
      <div
        className={`p-4 rounded-md ${
          order.status === "preparing"
            ? "bg-primary text-white"
            : "shadow shadow-slate-100 border flex flex-col gap-2 border-slate-100"
        }`}
      >
        <div className="my-2">
          <span
            className={`font-semibold rounded-full p-2 ${
              order.status === "preparing"
                ? "bg-white text-primary"
                : "bg-primary text-white"
            } `}
          >
            {order.status}
          </span>
        </div>
        <p
          className={`font-bold text-2xl ${
            order.status === "preparing" ? "text-white" : "text-primary"
          }`}
        >
          {order.total_price.toLocaleString()} UZS
        </p>
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg truncate max-w-[200px]">
            {address || "Yuklanmoqda..."}
          </h1>
          
          <p
            className={`font-medium ${
              order.status === "preparing" ? "text-white" : "text-gray-500"
            } text-base`}
          >
            {getTotalQuantity(order.order_items)} ta
          </p>
        </div>
        
        <ul
          className={`font-bold ${
            order.status === "preparing" ? "text-white" : "text-gray-500"
          } mt-2 list-disc p-2 flex flex-col gap-1`}
        >
          {order.order_items.map((item: OrderItem) => (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default OrderCardForUser;
