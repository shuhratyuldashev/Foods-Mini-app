import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderProductPage = ({
  currentPhoto,
  setCurrentPhoto,
  imgs,
}: {
  currentPhoto: number;
  setCurrentPhoto: (i: number) => void;
  imgs: string[];
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <header className="min-h-[280px] max-h-[300px] mt-5 rounded-md relative text-white">
      <img
        className="absolute top-0 left-0 bottom-0 right-0 w-full object-cover z-[0]"
        src={imgs[currentPhoto]}
        alt=""
      />
      <div className="top-0 bottom-0 right-0 left-0 p-4 flex flex-col justify-between absolute z-10">
        <nav className="flex justify-between">
          <Link to="/products">
            <button className="rounded-full p-2 border border-white flex justify-center items-center">
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
          <p className="font-semibold text-lg">About this menu</p>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`rounded-full p-2 border border-white ${isFavorite && "bg-white text-red-600"} flex justify-center items-center`}
          >
            {isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            ) : (
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </button>
        </nav>
        <div className="flex w-[35%] mx-auto justify-center items-center gap-2 mt-4 py-2">
          {imgs.map((_, index) => (
            <div
              onClick={() => setCurrentPhoto(index)}
              key={index}
              className={`${
                currentPhoto === index ? "bg-primary" : "bg-white"
              } h-1 max-w-full min-w-1/3 rounded transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderProductPage;
