import BottomBar from "@/widgets/bottombar";
import ChartSales from "@/widgets/chart-sales";
import { Link } from "react-router-dom";
import {
  data_for_months,
  data_for_week,
} from "@/shared/constants/chart-data-constants";
import { Separator } from "@/shared/ui/separator";
import React from "react";
import { useFetchProducts } from "@/shared/hooks/useFoods";
import { useFetchEmployees } from "@/shared/hooks/useEmployees";

const DashboardPage = () => {
  const [isWeekly, setIsWeekly] = React.useState<boolean>(false);

  const products = useFetchProducts();
  const { employees } = useFetchEmployees();

  return (
    <main className="p-4">
      <p className="font-semibold text-center my-4">Umummiy dashboard</p>
      <DashboardIncomes />

      <Separator className="my-4" />

      <div className="flex flex-col gap-4">
        <div className="my-2 flex gap-2 p-1 rounded-md bg-gray-200 w-full">
          <div
            onClick={() => setIsWeekly(true)}
            className={`font-semibold text-sm text-center w-full ${isWeekly ? "bg-white" : "text-gray-500"} rounded-md p-2`}
          >
            Haftalik
          </div>
          <div
            onClick={() => setIsWeekly(false)}
            className={`font-semibold text-sm text-center w-full ${!isWeekly ? "bg-white" : "text-gray-500"} rounded-md p-2`}
          >
            Oylik
          </div>
        </div>

        <p className="text-sm font-semibold">Haftalik sotuvlar</p>
        <ChartSales
          mothsly={data_for_months}
          weekly={data_for_week}
          isWeekly={isWeekly}
        />
        <Link to="/admin/sales"></Link>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        <Link
          to="/admin/foods"
          className="flex justify-between border p-4 rounded-xl"
        >
          <p className="text-sm font-semibold text-gray-600">
            Mahsulotlar ro'yxati:
          </p>
          <span className="font-bold text-primary">{products.length}</span>
        </Link>
        <Link
          to="/admin/customers"
          className="flex justify-between border p-4 rounded-xl"
        >
          <p className="text-sm font-semibold text-gray-600">
            Mijozlar ro'yxati:
          </p>
          <span className="font-bold text-primary">5</span>
        </Link>
        <Link
          to="/admin/employes"
          className="flex justify-between border p-4 rounded-xl"
        >
          <p className="text-sm font-semibold text-gray-600">
            Ishchilar ro'yxati:
          </p>
          <span className="font-bold text-primary">{employees.length}</span>
        </Link>
      </div>
      <Separator className="my-8" />

      <BottomBar isForAdmin currentPage="Dashboard" />
    </main>
  );
};

const DashboardIncomes = () => (
  <section className="flex gap-2">
    <Link to="/admin/income" className="w-full p-4 border rounded-md">
      <div className="flex text-sm gap-2 font-semibold text-gray-600 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          <path
            fillRule="evenodd"
            d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
            clipRule="evenodd"
          />
          <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
        </svg>
        Naxt orqali:
      </div>
      <h2 className="font-bold text-xl text-primary">2,000,000 UZS</h2>
    </Link>
    <Link to="/admin/income" className="w-full p-4 border rounded-md">
      <div className="flex text-sm gap-2 font-semibold text-gray-600 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
          <path
            fillRule="evenodd"
            d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
            clipRule="evenodd"
          />
        </svg>
        Karta orqali:
      </div>
      <h2 className="font-bold text-xl text-primary">2,000,000 UZS</h2>
    </Link>
  </section>
);

export default DashboardPage;
