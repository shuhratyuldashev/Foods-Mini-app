import { Order } from "@/shared/types/types";
import { use, useState } from "react";
import axios from "@/shared/axios";
import { toast } from 'react-toastify';
import { userData } from "@/shared/store/user";

const OrderInfo = ({ order }: { order?: Order }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (!order?.id) return;

    try {
      setLoading(true);
      let nextStatus = "preparing";
      if (order.status === "preparing") {
        nextStatus = "ready";
      }
      const response = await axios.patch(`/order/order-status/${order.id}/`, {
        status: nextStatus,
      });
      toast.success("Buyurtma tasdiqlandi ✅");
      window.location.reload();
    } catch (error) {
      toast.error("Xatolik yuz berdi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="font-semibold">Buyurtma:</h2>
      <ul className="text-sm text-gray-600 mt-2">
        {order?.order_items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.quantity} dona)
          </li>
        ))}
        {!order?.order_items.length && (
          <li>Buyurtma bo'yicha ma'lumot mavjud emas</li>
        )}
      </ul>
      <h2 className="font-semibold mt-4">Jami narx:</h2>
      <p className="text-sm text-gray-600">
        {order?.total_price?.toLocaleString() || 0} UZS
      </p>
      <h2 className="font-semibold mt-4">Holat:</h2>
      <p className="text-sm text-gray-600">
        {order?.status === "pending"
          ? "Kutilmoqda"
          : order?.status === "preparing"
            ? "Tayyorlanmoqda"
            : order?.status === "ready"
              ? "Tayyor"
              : "Nomaʼlum"}
      </p>
      {order?.status !== "ready" && userData?.type !== "user" && (
        <button
          onClick={handleConfirm}
          disabled={loading}
          className="mt-6 w-full bg-primary text-white py-2 font-semibold rounded-full disabled:opacity-50"
        >
          {loading ? "Tasdiqlanmoqda..." : "Tasdiqlash"}
        </button>
      )}
    </>
  );
};

export default OrderInfo;
