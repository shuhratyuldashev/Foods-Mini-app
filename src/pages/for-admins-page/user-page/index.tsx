import avatar from "@/shared/assets/images/avatar-2.jpg";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <main className="p-4 flex flex-col gap-2">
      <header>
        <Link to="/admin/customers">
          <button className="p-2 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </header>

      <div className="flex border items-center h-14 mt-4 justify-between gap-2 p-2 bg-gray-100 rounded-md">
        <div className="font-semibold">User Name:</div>
        <div className="font-bold text-gray-500">John Doe</div>
      </div>

      <div className="flex border items-center justify-between gap-2 p-2 bg-gray-100 rounded-md">
        <div className="font-semibold">Avatar:</div>
        <div className="w-10 aspect-square rounded-full">
          <img
            src={avatar}
            className="w-full shadow h-full object-cover rounded-full"
            alt=""
          />
        </div>
      </div>

      <div className="flex border items-center h-14 justify-between gap-2 p-2 bg-gray-100 rounded-md">
        <div className="font-semibold">Phone:</div>
        <div className="font-bold text-gray-500">+998 99 999 99 99</div>
      </div>
    </main>
  );
};

export default UserPage;
