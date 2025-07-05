
import { data_for_months, data_for_week } from "@/shared/constants/chart-data-constants";
import BottomBar from "@/widgets/bottombar";
import ChartSales from "@/widgets/chart-sales";
import React from "react";




const SalesPage = () => {
  const [isWeekly, setIsWeekly] = React.useState<boolean>(false);
  return (
    <main className="p-4">
      <h1 className=" text-center my-4 font-semibold">Sales Page</h1>
      <div className="my-2 flex gap-2 p-1 rounded-md bg-gray-200 w-full">
        <div
          onClick={() => setIsWeekly(true)}
          className={`font-semibold text-sm text-center w-full ${isWeekly ? "bg-white" : "text-gray-500"} rounded-md p-2`}
        >
          Weekly
        </div>
        <div
          onClick={() => setIsWeekly(false)}
          className={`font-semibold text-sm text-center w-full ${!isWeekly ? "bg-white" : "text-gray-500"} rounded-md p-2`}
        >
          Monthly
        </div>
      </div>

     <ChartSales mothsly={data_for_months} weekly={data_for_week} isWeekly={isWeekly}/>

      <BottomBar isForAdmin currentPage="sales" />
    </main>
  );
};

export default SalesPage;
