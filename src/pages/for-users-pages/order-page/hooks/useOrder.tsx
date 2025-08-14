import { useEffect, useState } from "react";
import axios from "@/shared/axios";
import { Order } from "@/shared/types/types";

export const useOrder = (id?: string) => {
  const [order, setOrder] = useState<Order>();

  const fetchOrder = async () => {
    if (!id) return;
    try {
      const res = await axios.get(`/order/order-detail/${id}/`);
      setOrder(res.data);
    } catch (err) {
      console.error("Xatolik buyurtmani olishda:", err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  return { order, fetchOrder };
};
