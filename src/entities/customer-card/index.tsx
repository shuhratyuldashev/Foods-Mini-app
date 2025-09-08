import { Link } from "react-router-dom";
import avatar from "@/shared/assets/images/avatar-2.jpg";


interface CustomerCardProps {
  id: number;
  name: string;
  phone: string;
  address: string;
}

const CustomerCard = ({ id, name, phone }: CustomerCardProps) => {
  return (
    <Link
      to={`/user/${id}`}
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
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray-500 font-bold text-sm">{phone}</p>
      </div>
    </Link>
  );
};

export default CustomerCard;
