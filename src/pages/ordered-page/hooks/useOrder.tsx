import { useEffect, useState } from "react";
import { Order } from "@/shared/types/types";
import { fetchAddressByCoords, fetchOrders } from "../lib/order-handlers";

export const useMyOrders = () => {
  const [myOrders, setMyOrders] = useState<Order[]>([]);
  const [addresses, setAddresses] = useState<Record<string, string>>({});

  const user_id = "59cee8b4-ec56-4c0d-9fea-ea952ca837e9";

  useEffect(() => {
    fetchOrders(user_id).then(async (orders) => {
      setMyOrders(orders);

      const addressesMap: Record<string, string> = {};
      for (const o of orders) {
        if (o.customer_latitude && o.customer_longitude) {
          try {
            const addr = await fetchAddressByCoords(
              o.customer_latitude,
              o.customer_longitude,
            );
            addressesMap[o.id] = addr;
          } catch (err) {
            console.error("Error fetching address", err);
          }
        }
      }
      setAddresses(addressesMap);
    });
  }, []);

  return { myOrders, addresses };
};
