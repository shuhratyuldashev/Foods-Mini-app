import { Link } from "react-router-dom";

const TotalOrders = ({
  all_orders,
  delivering_orders,
  completed_orders,
  canceled_orders,
}: {
  all_orders: number;
  delivering_orders: number;
  completed_orders: number;
  canceled_orders: number;
}) => {
  return (
    <div className="my-5 flex justify-between p-4 bg-white rounded-md border">
      <Link to="/staff/my-orders/" className="text-center">
        <h1 className="font-medium">{all_orders || 0}</h1>
        <p className="text-xs text-gray-500 font-semibold">Barchasi</p>
      </Link>
      <div className="w-[1px] bg-gray-400" />
      <Link to="/staff/my-orders/delivering" className="text-center">
        <h1 className="font-medium">{delivering_orders || 0}</h1>
        <p className="text-xs text-gray-500 font-semibold">Yetkazilmoqda</p>
      </Link>
      <div className="w-[1px] bg-gray-400" />
      <Link to="/staff/my-orders/completed" className="text-center">
        <h1 className="font-medium">{completed_orders || 0}</h1>
        <p className="text-xs text-gray-500 font-semibold">Bajarilganlar</p>
      </Link>
      <div className="w-[1px] bg-gray-400" />
      <Link to="/staff/my-orders/canceled" className="text-center">
        <h1 className="font-medium">{canceled_orders || 0}</h1>
        <p className="text-xs text-gray-500 font-semibold">Bekor qilingan</p>
      </Link>
    </div>
  );
};

export default TotalOrders;
