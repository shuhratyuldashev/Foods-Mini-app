import { Link } from "react-router-dom";

const HeaderChoosePlace = () => (
  <header className="flex items-center p-4 mt-5">
    <Link to="/cart">
      <button className="rounded-full p-2 border flex justify-center items-center">
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
    <p className="font-semibold text-lg mx-auto translate-x-[-10%]">
      Choose Place
    </p>
  </header>
);

export default HeaderChoosePlace;
