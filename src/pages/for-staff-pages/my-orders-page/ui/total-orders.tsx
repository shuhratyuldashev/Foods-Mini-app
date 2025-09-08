import React, { useState, useEffect } from "react";
import axios from "@/shared/axios";

type Order = {
  id: string;
  customer: string;
  status: string;
  order_date: string;
  order_items: { id: string; name: string; price: number; quantity: number }[];
};

const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabs = [
    { id: "all", label: "Barchasi" },
    { id: "new", label: "Yangilar" },
    { id: "process", label: "Jarayonda" },
    { id: "completed", label: "Tugallanganlar" },
  ];

  return (
    <div className="flex border-b overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 min-w-[120px] px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.id
              ? "bg-[#FFF3E0] text-[#FF8C00] border-b-2 border-[#FF8C00]"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const OrdersTable = ({ data }: { data: Order[] }) => {
  return (
    <div className="overflow-x-auto my-5 bg-white rounded-md border">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Nomi
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Holat
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Mijoz
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Amal
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {order.order_items[0]?.name || "—"}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {order.status}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {order.customer}
              </td>
              <td className="px-6 py-4 text-sm text-[#FF8C00] font-medium">
                <a
                  href={`/staff/my-orders/${order.id}`}
                  className="hover:text-[#e67600]"
                >
                  Ko‘rish →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [data, setData] = useState<Order[]>([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `worker/orders/${userId}/?status=${activeTab}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchOrders();
  }, [activeTab, userId]);

  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Buyurtmalar</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <OrdersTable data={data} />
    </div>
  );
};

export default App;
