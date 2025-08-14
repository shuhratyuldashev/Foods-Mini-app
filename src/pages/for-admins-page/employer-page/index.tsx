import DrawerAddNewEmployer from "@/features/add-new-employer/ui/add-customer-drawer";
import avatar from "@/shared/assets/images/avatar-2.jpg";
import axios from "@/shared/axios";
import { Employer } from "@/shared/types/types";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmployerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employer, setEmployer] = React.useState<Employer[] | null>(null);
  const navigate = useNavigate();

  const fetchEmployer = async (id: string) => {
    const res = await axios.get<{ results: Employer[] }>(`/worker/`, {
      params: { id },
    });
    setEmployer(res.data.results);
  };

  const handleDeleteEmployer = async (id: string) => {
    try {
      await axios.delete(`/worker/${id}/`);
      navigate("/admin/employes/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(employer);

  React.useEffect(() => {
    if (id) fetchEmployer(String(id));
  }, [id]);

  return (
    <main className="p-4  min-h-screen flex flex-col gap-2">
      <Link to="/admin/employes">
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

      <div className="flex border items-center h-14 mt-4 justify-between gap-2 p-2 bg-gray-100 rounded-md">
        <div className="font-semibold">User Name:</div>
        <div className="font-bold text-gray-500">{employer?.[0]?.username}</div>
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
        <div className="font-semibold">Full Name:</div>
        <div className="font-bold text-gray-500">{employer?.[0]?.fullname}</div>
      </div>

      <div className="flex border items-center h-14 justify-between gap-2 p-2 bg-gray-100 rounded-md">
        <div className="font-semibold">Phone:</div>
        <div className="font-bold text-gray-500">
          {employer?.[0]?.phone_number}
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <DrawerAddNewEmployer type="put" employerId={id} />
        <button
          onClick={() => handleDeleteEmployer(String(id))}
          className="bg-primary w-full font-semibold p-4 rounded-full text-white"
        >
          Delete Employer
        </button>
      </div>
    </main>
  );
};

export default EmployerPage;
