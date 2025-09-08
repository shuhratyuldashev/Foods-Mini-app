import { Link } from "react-router-dom";
import { Order, OrderItem } from "@/shared/types/types";

interface OrderCardProps {
  order: Order;
  address?: string;
}

const OrderCard = ({ order, address }: OrderCardProps) => {
  const isActive = order.status === "preparing";
  const priceColor = isActive ? "text-white" : "text-gray-600";

  const getTotalQuantity = () =>
    order.order_items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      to={`/order/${order.id}`}
      className={`flex items-center rounded-md shadow-sm shadow-slate-100 py-2 px-4 w-full ${isActive ? "text-white bg-primary" : "border opacity-90 bg-white"
        }`}
    >

      <div className="flex items-center w-full">
        <div>
          <p className="font-medium">{order.status}</p>
          <p className={`font-bold text-xl ${priceColor}`}>
            {order.total_price.toLocaleString()} UZS
          </p>
          {/* <h3 className="font-medium truncate max-w-[200px]">
            {address || "Manzil topilmadi"}
          </h3> */}
          <ul className="mt-2">
            {order.order_items.map((item: OrderItem) => (
              <li className="font-semibold" key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <p className={`ml-auto font-semibold ${priceColor}`}>
          {getTotalQuantity()} ta
        </p>
      </div>
    </Link>
  );
};

export default OrderCard;
