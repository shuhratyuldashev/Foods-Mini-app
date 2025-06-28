import { Link } from "react-router-dom";

interface ChatCardProps {
  id: number;
  avatar: string;
  name: string;
  last_message: string;
  checked: boolean;
  time: string;
}

const ChatCard = ({
  id,
  avatar,
  name,
  last_message,
  checked,
  time,
}: ChatCardProps) => (
  <Link to={`/messages/${id}`}>
    <div className="w-full flex rounded-md p-3 bg-white">
      <div className="max-w-[40px] max-h-[40px] rounded-full">
        <img
          className="w-full object-cover h-full rounded-full"
          src={avatar}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col justify-between px-2 text-sm">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-base">{name}</h2>
          <p className="text-gray-400 font-medium">{time}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400 font-medium">{last_message}</p>
          {checked && (
            <div className="text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default ChatCard;
