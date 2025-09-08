import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/drawer";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import axios from '@/shared/axios';

const ChooseLocationDrawer = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const defaultCenter: [number, number] = [41.3111, 69.2797];

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!position) return alert("Iltimos, manzil tanlang!");

    const userId = localStorage.getItem("user_id");
    try {
      const res = await axios.patch(`/order/customers/action/${userId}/`, {
        latitude: position[0],
        longitude: position[1],
      });
      console.log("Address API javobi:", res.data);
    } catch (err) {
      console.error("Manzilni saqlashda xatolik:", err);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <div className="flex justify-between">
          <p className="font-semibold text-base">Manzil</p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent className="p-4">
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex gap-2 border rounded-md">
            <input
              type="text"
              className="h-full w-full py-3 outline-none px-2"
              placeholder="Qidirish..."
            />
          </div>

          <div className="my-4 h-[400px]">
            <MapContainer
              center={defaultCenter} // Tashkent default
              zoom={12}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <LocationMarker />
            </MapContainer>
          </div>

          <button
            type="submit"
            className="p-4 rounded-full bg-primary text-white text-sm font-semibold w-full"
          >
            Tasdiqlash
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default ChooseLocationDrawer;
