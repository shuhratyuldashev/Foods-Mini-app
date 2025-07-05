import { Link } from "react-router-dom";

interface OrderCardProps {
  id: number;
  total_price: string;
  count: number;
  location: string;
  status: string;
}

const OrderCard = ({
  id,
  total_price,
  count,
  location,
  status,
}: OrderCardProps) => (
  <Link
    to={`/staff/my-order/${id}`}
    className={`flex items-center rounded-md bg-white py-2 px-4  w-full ${status === "deliviring" ? "border-2 border-primary" : "border opacity-90"}`}
  >
    <StatusIcon status={status} />
    <div className="flex items-center w-full">
      <div>
        <h3 className="font-medium">{location}</h3>
        <p
          className={`${status === "deliviring" ? "text-primary" : "text-gray-600"} font-bold text-sm`}
        >
          {total_price}
        </p>
      </div>
      <p
        className={`ml-auto ${status === "deliviring" ? "text-primary" : "text-gray-600"} font-semibold`}
      >
        {count}
      </p>
    </div>
  </Link>
);

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "completed") {
    return (
      <div className="text-primary/75 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }
  if (status === "canceled") {
    return (
      <div className="text-gray-400 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }
  if (status === "deliviring") {
    return (
      <div className="text-gray-400 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            className="text-primary"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      </div>
    );
  }
};

export default OrderCard;
