import HeaderChoosePlace from "./ui/header-choose-place";
import React from "react";
import ChooseTypeFeeModal from "./ui/choose-type-fee";

const places_list = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  place: "1A",
  isFree: Math.random() < 0.5,
}));

const ChoosePlacePage = () => {
  const [isTypeFee, setIsTypeFee] = React.useState<boolean>(false);
  return (
    <main>
      <HeaderChoosePlace />
      <section className="mt-4 p-4">
        <p className="font-semibold text-sm text-gray-500">Joylar ro'yxati</p>
        <div className="grid grid-cols-8 gap-1 mt-2">
          {places_list.map((p) => (
            <div
              onClick={() => setIsTypeFee(true)}
              key={p.id}
              className={`${p.isFree ? "bg-primary" : "bg-gray-300"} aspect-square rounded-full text-sm text-white font-bold flex justify-center items-center`}
            >
              1A
            </div>
          ))}
        </div>
        <ChooseTypeFeeModal
          isOpen={isTypeFee}
          handleClose={() => setIsTypeFee(false)}
        />
      </section>
    </main>
  );
};

export default ChoosePlacePage;
