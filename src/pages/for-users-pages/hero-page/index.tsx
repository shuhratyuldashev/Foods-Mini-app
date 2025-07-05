import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { pages } from "./constants/pages.ts";

const HeroPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (currentPage <= pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <main className="w-full h-screen p-2 flex items-end relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${pages[currentPage - 1].image})`,
            zIndex: -1,
          }}
        />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.section
          key={`page-${currentPage}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-primary flex flex-col p-4 w-full rounded-4xl"
        >
          <h1 className="text-4xl text-white font-bold text-center">
            {pages[currentPage - 1].title}
          </h1>
          <p className="text-md mt-2 text-white text-center">
            {pages[currentPage - 1].text}
          </p>

          <div className="flex w-[35%] mx-auto justify-center items-center gap-2 mt-4">
            {pages.map((p) => (
              <div
                key={p.id}
                className={`${
                  currentPage === p.id ? "bg-white" : "bg-gray-300"
                } h-[6px] w-1/3 rounded`}
              />
            ))}
          </div>

          <div className="flex w-full justify-between items-center text-white mt-20">
            <button className="text-lg p-2 font-semibold">Skip</button>

            <button
              className="text-lg flex items-center gap-2 p-2 font-semibold"
              onClick={handleNextPage}
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default HeroPage;
