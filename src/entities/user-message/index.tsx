import avatar from "../../shared/assets/images/avatar-img.png";

const UserMessage = ({
  name,
  message,
  time,
}: {
  name: string;
  message: string;
  time: string;
}) => (
  <div className="flex items-start max-w-[200px]">
    <div className="rounded-full h-[40px] w-[40px]">
      <img src={avatar} alt={name} />
    </div>
    <div className="flex flex-col gap-2 pl-2">
      <h3 className="text-base font-semibold">{name}</h3>
      <div className="bg-white shadow-xs rounded-md p-2 text-sm font-medium">
        {message}
      </div>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </div>
);

export default UserMessage;
