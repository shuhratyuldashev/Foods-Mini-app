import { useParams } from "react-router-dom";
import HeaderOrderPage from "./ui/header-order-page";
import OrderStatusStepper from "./ui/order-status-steppet";
import OrderInfo from "./ui/order-info";
import { useOrder } from "./hooks/useOrder";

const OrderPage = () => {
  const { id } = useParams();
  const { order, fetchOrder } = useOrder(id);
  console.log(order)
  return (
    <main>
      <HeaderOrderPage />
      <section className="w-full p-4">
        <h2 className="font-semibold">Yetkazib berish vaqti:</h2>
        <span className="text-gray-500">
          {(order as any)?.order_date && (() => {
            const start = new Date((order as any).order_date);
            const end = new Date(start.getTime() + 45 * 60000); // 45 minut qo‘shish

            return `${start.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })} - ${end.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}`;
          })()}

        </span>


        <OrderStatusStepper
          status={order?.status}
          deliveryStatus={order?.delivery_status}
        />
        <OrderInfo order={order} />
        {/* <button
          onClick={() => {
            fetchOrder()
            window.location.reload();
          }}
          className="mt-10 w-full px-4 py-2 bg-primary text-white rounded-full font-semibold"
        >
          Yangilash
        </button> */}

        {/* {order?.delivery_status === "by_currier" && order?.customer_latitude && order?.customer_longitude && (
          <button
            onClick={() =>
              window.open(`https://www.google.com/maps?q=${order?.customer_latitude},${order?.customer_longitude}&z=18`)
            }
            className="mt-2 w-full px-4 py-2 bg-primary text-white rounded-full font-semibold"
          >
            Manzilni Ko'rish
          </button>
        )} */}

        {order?.delivery_status === "by_currier" && order?.customer_latitude && order?.customer_longitude && (
          <button
            className="mt-2 w-full px-4 py-2 bg-primary text-white rounded-full font-semibold"
          >
            Bajarildi
          </button>
        )}
      </section>
    </main >
  );
};

export default OrderPage;
