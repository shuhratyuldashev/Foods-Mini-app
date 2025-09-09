import { Separator } from "@/shared/ui/separator";
import HeaderMyOrderPage from "./ui/header-my-order.page";
import React, { useEffect } from "react";
import axios from "@/shared/axios";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { userData } from "@/shared/store/user";

// Marker icon to‘g‘ri chiqishi uchun custom icon kerak bo‘ladi
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MyOrderPage = () => {
  const [order, setOrder] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);
  const orderId = useParams().id;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`order/order-detail/${orderId}/`);
        setOrder(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setError("Buyurtma ma'lumotlarini olishda xatolik yuz berdi");
      }
    };
    fetchOrders();
  }, [orderId]);

  const handleMarkAsFinished = async () => {
    try {
      await axios.patch(`order/order-status/${orderId}/`, { status: "finished", worker_id: userData?.username });
      setOrder((prev: any) => ({ ...prev, status: "finished", worker_id: userData?.username }));
    } catch (error) {
      console.error("Failed to update order status:", error);
      setError("Buyurtma holatini yangilashda xatolik yuz berdi");
    }
  };

  const handleGetOrder = async () => {
    try {
      await axios.patch(`order/order-status/${orderId}/`, { status: "on_way", worker_id: userData?.username });
      setOrder((prev: any) => ({ ...prev, status: "on_way", worker_id: userData?.username }));
    } catch (error) {
      console.error("Failed to update order status:", error);
      setError("Buyurtma holatini yangilashda xatolik yuz berdi");
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!order) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <main className="p-4">
      <HeaderMyOrderPage />

      <section className="flex flex-col mt-4">
        <h2 className="font-semibold text-base mt-4">Buyurtma qilingan taom</h2>

        {order.order_items.map((item: any) => (
          <div key={item.id} className="flex items-center">
            <div className="w-18 my-4 h-14">
              <img
                className="w-full h-full rounded-md object-cover"
                src={`${import.meta.env.VITE_MEDIA_URL}/media/images/${item.image}`}
                alt={item.name}
              />
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col ml-2 justify-between">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-primary font-bold">
                  {item.price.toLocaleString()} UZS
                </p>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                {item.quantity} dona
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-between my-2 font-medium">
          Holati:
          <span className="bg-gray-400 text-white text-sm font-semibold py-1 px-2 rounded-full">
            {order.status}
          </span>
        </div>

        <div className="flex justify-between my-2 font-medium">
          Jami summa:
          <span className="text-primary font-bold">
            {order.total_price.toLocaleString()} UZS
          </span>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col">
          <h2 className="font-semibold text-base">Yetkazish tafsilotlari</h2>
          <div className="w-full mt-2 flex justify-between items-center">
            <p>Yetkazib berish turi</p>
            <span className="font-semibold">{order.delivery_status}</span>
          </div>
          <div className="w-full mt-2 flex justify-between items-center">
            <p>Buyurtma sanasi</p>
            <span className="font-semibold">
              {new Date(order.order_date).toLocaleString()}
            </span>
          </div>
        </div>

        {/* MAP */}
        {order.lat && order.lon && (
          <div
            className="mt-6 w-full h-64 rounded-lg overflow-hidden shadow cursor-pointer"
            onClick={() =>
              window.open(
                `https://yandex.com/maps/?rtext=~${order.lat},${order.lon}&rtt=auto`,
                "_blank"
              )
            }
          >
            <MapContainer
              center={[order.lat, order.lon]}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              />
              <Marker position={[order.lat, order.lon]} icon={customIcon}>
                <Popup>Buyurtma manzili</Popup>
              </Marker>
            </MapContainer>
          </div>
        )}

        {/* BUTTONS */ 
        order.status == 'ready' && userData?.role != "user"  ?
        <button
          className="p-4 w-full text-center mt-8 bg-primary text-white font-semibold text-sm rounded-full"
          onClick={handleGetOrder}
          disabled={order.status === "finished"}
        >
          Buyurtmani qabul qilish
        </button>
        : order.status === 'on_way' && userData?.role != "user" &&        
        <button
        className="p-4 w-full text-center mt-8 bg-red-800 text-white font-semibold text-sm rounded-full"
        onClick={handleMarkAsFinished}
        disabled={order.status === "finished"}
        >
          Bajarildi deb belgilash
        </button>
        }
      </section>
    </main>
  );
};

export default MyOrderPage;
