import BottomBar from "@/widgets/bottombar";
import HeaderCustomersPage from "./ui/header-customers-page";
import CustomerCard from "@/entities/customer-card";
import { customers_list } from "../../../shared/constants/customers-list";
import React, { useEffect, useState } from "react";
import axios from "@/shared/axios";

const CustomersListPage = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("order/customers/");
        setData(response.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="p-4">
      <HeaderCustomersPage />

      <section className="mt-5 flex-col flex gap-2">
        {data?.map((c) => (
          <CustomerCard key={c.id} {...c} />
        ))}
      </section>
      <BottomBar isForAdmin currentPage="Mijozlar" />
    </main>
  );
};

export default CustomersListPage;
