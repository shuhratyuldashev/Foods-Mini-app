import { Link } from "react-router-dom";
import img_no_result from "@/shared/assets/images/no-results-img.png";

const EmptyCart = () => (
  <section className="flex flex-col items-center mt-32">
    <img src={img_no_result} alt="img_no_result" />
    <h1 className="font-bold text-2xl">Ouch! Hungry</h1>
    <p className="text-gray-400 text-center mt-2">
      Ko‘rinadi, hozircha sizda buyurtma yo‘q
    </p>
    <Link to="/" className="w-full">
      <button className="w-full bg-primary text-white rounded-full font-semibold p-4 transition duration-500 active:scale-90 mt-10">
        Ovqatlarni topish
      </button>
    </Link>
  </section>
);

export default EmptyCart;
