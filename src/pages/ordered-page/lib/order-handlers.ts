import axios from "@/shared/axios";

export const fetchOrders = async (user_id: string) => {
  const res = await axios.get(`/order/customers/${user_id}/orders/`, {
    params: { customer_id: user_id },
  });
  return res.data.results;
};

export const fetchAddressByCoords = async (lat: number, lon: number) => {
  const res = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
  );
  const data = await res.data;
  
  return data.display_name;
};

// 1f688ead-1e0d-4d05-a051-ba53a9b2765f <-- Worker ID just to keep