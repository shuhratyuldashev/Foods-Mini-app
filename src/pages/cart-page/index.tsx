import BottomBar from "../../widgets/bottombar";
import img_no_result from "../../shared/assets/images/no-results-img.png";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <main className="p-4">
      <header className="flex justify-between items-center mt-5">
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
        <p className="font-semibold text-lg">My Cart</p>
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
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </header>

      <section className="flex flex-col items-center mt-32">
        <img src={img_no_result} alt="img_no_result" />
        <h1 className="font-bold text-2xl">Ouch! Hungry</h1>
        <p className="text-gray-400 text-center mt-2">
          Seems like you have not ordered any food yet
        </p>
        <Link to="/products" className="w-full">
          <button className="w-full bg-primary text-white rounded-full font-semibold p-4 transition duration-500 active:scale-90 mt-10">
            Find Foods
          </button>
        </Link>
      </section>
      <BottomBar currentPage="Cart" />
    </main>
  );
};

export default CartPage;
