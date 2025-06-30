import { motion } from "framer-motion";

const DeleteCardModal = ({ handleClose }: { handleClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex justify-center bg-gray-200/30 backdrop-blur-sm items-center fixed top-0 bottom-0 left-0 right-0"
  >
    <div className="p-4 bg-white w-[80%] rounded-md shadow">
      <header className="flex justify-between p-2">
        <h1 className="mx-auto translate-x-[10%] font-semibold text-2xl">
          Confirm Delete
        </h1>
        <button onClick={handleClose} className="p-1 rounded-md border">
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </header>
      <p className="text-center mt-4 text-gray-400 font-semibold text-sm">
        Are you sure to delete this card?
      </p>
      <div className="flex gap-2 mt-5 font-semibold">
        <button
          onClick={handleClose}
          className="bg-primary text-white p-3 w-1/2 flex items-center gap-2 justify-center rounded-full"
        >
          No, I won't
        </button>
        <button className="p-3 w-1/2 flex items-center gap-2 justify-center rounded-full border">
         Yes, Of course
        </button>
      </div>
    </div>
  </motion.div>
);

export default DeleteCardModal;
