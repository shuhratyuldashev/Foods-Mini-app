import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Modal = ({
  children,
  title,
  handleClose,
  isOpen,
}: {
  children: React.ReactNode;
  title: string;
  handleClose: () => void;
  isOpen: boolean;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center bg-gray-200/30 backdrop-blur-sm items-center fixed top-0 bottom-0 left-0 right-0"
      >
        <div className="p-4 bg-white w-[80%] rounded-md shadow">
          <ModalHeader title={title} handleClose={handleClose} />
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ModalHeader = ({
  title,
  handleClose,
}: {
  title: string;
  handleClose: () => void;
}) => (
  <header className="flex relative justify-center p-2">
    <h1 className="font-semibold text-2xl">{title}</h1>
    <button
      onClick={handleClose}
      className="p-1 absolute right-0 rounded-md border"
    >
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
);

export default Modal;
