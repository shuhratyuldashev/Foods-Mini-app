import axios from "@/shared/axios";

export const fetchOrders = async (user_id: string) => {
  const res = await axios.get(`/order/customers/${user_id}/orders/`);
  return res.data.results;
};

export const fetchAddressByCoords = async (lat: number, lon: number) => {
  const res = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
  );
  const data = await res.data.results;
  
  return data.display_name;
};

