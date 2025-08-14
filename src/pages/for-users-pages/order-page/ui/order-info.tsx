import { Order } from "@/shared/types/types";

const OrderInfo = ({ order }: { order?: Order }) => (
    <>
      <h2 className="font-semibold">Buyurtma</h2>
      <ul className="text-sm text-gray-600 mt-2">
        {order?.order_items.map((item) => (
          <li key={item.id}>
            {item.name} × {item.quantity}
          </li>
        ))}
      </ul>
    </>
);

export default OrderInfo;
