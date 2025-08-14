import { useEffect, useState } from "react";
import { Order } from "@/shared/types/types";
import { fetchAddressByCoords, fetchOrders } from "../lib/order-handlers";

export const useMyOrders = () => {
  const [myOrders, setMyOrders] = useState<Order[]>([]);
  const [addresses, setAddresses] = useState<Record<string, string>>({});

  const user_id = "74ffb7f6-1ac8-4b29-ba5c-9517786e8532";

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
