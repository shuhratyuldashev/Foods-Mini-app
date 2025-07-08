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
  return (
    <header className="min-h-[280px] max-h-[300px] mt-5 rounded-md relative text-white">
      <img
        className="absolute h-full top-0 rounded-md left-0 bottom-0 right-0 w-full object-cover z-[0]"
        src={imgs[currentPhoto]}
        alt=""
      />
      <div className="top-0 bottom-0 right-0 left-0 p-4 flex flex-col justify-between absolute z-10">
        <nav className="flex relative justify-center">
          <Link to="/">
            <button className="rounded-full backdrop-blur bg-gray-400/10 absolute left-0 p-2 border border-white flex justify-center items-center">
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
          <p className="font-semibold text-lg">Bu mahsulot haqida</p>
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
