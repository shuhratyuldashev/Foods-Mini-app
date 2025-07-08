import BottomBar from "../../../widgets/bottombar";
import { perosonal_data } from "./constants/personal-data";
import OptionsList from "./ui/options-list";
import React from "react";
import SignOutModal from "./ui/sign-out-modal";

const ProfilePage = () => {
  const [isSignOutModalOpen, setIsSignOutModalOpen] = React.useState(false);

  return (
    <main>
      <div className="p-4 min-h-screen">
        <h1 className="text-center font-semibold text-sm mt-4 mb-2">
          Profilingiz
        </h1>

        <section className="mt-2 flex flex-col items-center">
          <div className="w-[90px] h-[90px] relative rounded-full">
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
          <h2 className="font-semibold mt-2">{perosonal_data.user_name}</h2>
          <p className="text-sm text-gray-400">{perosonal_data.phone}</p>
        </section>

        <OptionsList />

        <button
          onClick={() => setIsSignOutModalOpen(true)}
          className="border p-3 mt-6 w-full flex items-center gap-2 justify-center rounded-full text-red-600"
        >
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
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          Chiqish
        </button>

        <SignOutModal
          isOpen={isSignOutModalOpen}
          handleClose={() => setIsSignOutModalOpen(false)}
        />
      </div>

      <BottomBar isForStaff currentPage="Profil" />
    </main>
  );
};

export default ProfilePage;
