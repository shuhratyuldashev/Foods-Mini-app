import BottomBar from "@/widgets/bottombar";
import { Link } from "react-router-dom";

const OrderedPage = () => {
  return (
    <main>
      <section className="p-4">
        <p className="text-center font-semibold mt-5">Mening Buyurtmalarim</p>

        <Link to="/payment">
          <div className="mt-5 flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-4 rounded-md shadow">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg">
                    Mirzo Ulug'bek tumani
                  </h1>
                  <p className="font-medium text-gray-500 text-base">
                    3 ta mahsulot
                  </p>
                </div>
                <p className="font-bold text-primary">125,000 UZS</p>
                <ul className="font-bold text-xs text-gray-500 mt-2 list-disc p-2 flex flex-col gap-1">
                  <li>Choyxona Osh 1 x3</li>
                  <li>Choyxona Osh 2 x2</li>
                  <li>Choyxona Osh 3 x1</li>
                </ul>
              </div>
            ))}
          </div>
        </Link>
      </section>
      <BottomBar currentPage="Buyurtmalarim" />
    </main>
  );
};

export default OrderedPage;
