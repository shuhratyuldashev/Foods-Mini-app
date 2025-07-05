import ChangePersonalDateForm from "../../../features/change-personal-date-form";
import { perosonal_data } from "../profile-page/constants/personal-data";
import HeaderPersonalDate from "./ui/header-personal-date";

const PersonalDatePage = () => {
  return (
    <main className="p-4">
      <HeaderPersonalDate />
      <div className="w-[100px] h-[100px] relative rounded-full mx-auto">
        <button className="absolute shadow right-0 bottom-0 rounded-full bg-gray-200 p-1 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path
              fillRule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <img
          className="w-full shadow-md object-cover h-full rounded-full"
          src={perosonal_data.imgs}
          alt={perosonal_data.user_name}
        />
      </div>

      <ChangePersonalDateForm />
    </main>
  );
};

export default PersonalDatePage;
