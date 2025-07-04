import BottomBar from "@/widgets/bottombar";
import ChartSales from "@/widgets/chart-sales";
import { Link } from "react-router-dom";
import { data_for_week } from "@/shared/constants/chart-data-constants";
import { Separator } from "@/shared/ui/separator";

const DashboardPage = () => {
  return (
    <main className="p-4">
      <p className="font-semibold text-center my-4">General Dashboard</p>
      <DashboardIncomes />

      <Separator  className="my-4"/>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold">Weekly Sales</p>
        <ChartSales weekly={data_for_week} isWeekly={true}/>
        <Link to="/admin/sales">
          <div className="p-2 rounded-full text-white bg-primary flex justify-center font-semibold text-sm">See All</div>
        </Link>
      </div>

      <Separator  className="my-4"/>
      

       <div className="flex flex-col gap-2">
        <Link to="/admin/foods" className="flex justify-between border p-4 rounded-xl">
        <p className="text-sm font-semibold text-gray-600">Foods List:</p>
        <span className="font-bold text-primary">5</span>
       </Link>
       <Link to="/admin/customers"  className="flex justify-between border p-4 rounded-xl">
        <p className="text-sm font-semibold text-gray-600">Customers List:</p>
        <span className="font-bold text-primary">5</span>
       </Link>
       <Link to="/admin/employes"  className="flex justify-between border p-4 rounded-xl">
        <p className="text-sm font-semibold text-gray-600">Employers List:</p>
        <span className="font-bold text-primary">5</span>
       </Link>
       </div>
      <Separator  className="my-8"/>



      <BottomBar isForAdmin currentPage="dashboard" />
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
            By Cash:
          </div>
          <h2 className="font-bold text-2xl text-primary">$ 17,230</h2>
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
            By Card:
          </div>
          <h2 className="font-bold text-2xl text-primary">$ 17,230</h2>
        </Link>
      </section>
)

export default DashboardPage;
