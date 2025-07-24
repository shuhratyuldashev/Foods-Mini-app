import { Link } from "react-router-dom";

interface CustomerCardProps {
  id: number;
  avatar: string;
  user_name: string;
  phone: string;
  role: string;
}

const EmployerCard = ({ id, avatar, user_name, phone, role }: CustomerCardProps) => {
  return (
    <Link
      to={`/employer/${id}`}
      className="flex gap-2 p-2 bg-gray-100 border rounded-md"
    >
      <div className="w-10 aspect-square rounded-full">
        <img
          src={avatar}
          className="w-full h-full object-cover aspect-square rounded-full"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="font-semibold">{user_name}</h2>
        <p className="text-gray-500 font-bold text-sm">{phone} - {role}</p>
      </div>
    </Link>
  );
};

export default EmployerCard;
