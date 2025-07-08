import HeaderExtraCardPage from "./ui/header-extra-card-page";
import card from "@/shared/assets/images/Card.png";
import humocard from "@/shared/assets/images/humo.png";
import uzcard from "@/shared/assets/images/uzcard.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const cards_list = [
  {
    id: 1,
    title: "Humocard",
    number: "**** **** 0783 7873",
    img: humocard,
  },
  {
    id: 2,
    title: "Uzcard",
    number: "**** **** 0783 7873",
    img: uzcard,
  },
];

const ExtraCardPage = () => {
  const [currentCard, setCurrentCard] = useState<string>("");
  return (
    <main className="p-4">
      <HeaderExtraCardPage />

      <section>
        <div className="w-full h-[200px] mt-10 mx-auto">
          <img
            className="w-full h-full object-cover rounded-md"
            src={card}
            alt=""
          />
        </div>

        <h3 className="mt-6 font-medium">Kredit kartasi</h3>

        <div className="flex flex-col mt-5 gap-2">
          {cards_list.map((c) => (
            <Link to="/order/pick-up" key={c.id}>
              <div
                onClick={() => setCurrentCard(c.title)}
                className={`flex items-center gap-2 w-full px-2 py-3 border-1 ${currentCard === c.title && "border-primary border-2"} rounded-md`}
              >
                <div className="rounded-full py-1 px-2">
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
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm max-w-8 font-semibold">{c.title}</p>
                  <span className="font-medium text-gray-400 text-sm">
                    {c.number}
                  </span>
                </div>
                <div className="max-w-8 ml-auto object-cover">
                  <img src={c.img} className="w-full h-full" alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/profile/extra-card/new">
          <button className="w-full bg-primary mt-20 text-white rounded-full font-semibold p-4 transition hover:scale-75">
            Yengi karta qo'shish
          </button>
        </Link>
      </section>
    </main>
  );
};

export default ExtraCardPage;
