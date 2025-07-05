import { Link } from "react-router-dom";

const HeaderMyOrdersSortedPage = ({ type }: { type: string }) => {
  return (
    <header className="flex items-center mt-5">
      <Link to="/staff/my-orders">
        <button className="rounded-full bg-white p-2 border flex justify-center items-center">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </Link>
      <p className="font-semibold text-sm mx-auto translate-x-[-10%]">
        My {type} Orders
      </p>
    </header>
  );
};

export default HeaderMyOrdersSortedPage;
