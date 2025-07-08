import Modal from "@/shared/ui/modal";
import { motion } from "framer-motion";

const DeleteCardModal = ({
  isOpen,
  handleClose,
}: {
  handleClose: () => void;
  isOpen: boolean;
}) => (
  <Modal title="O‘chirimoqchimisiz" isOpen={isOpen} handleClose={handleClose}>
    <p className="text-center mt-4 text-gray-400 font-semibold text-sm">
      Ushbu kartani o‘chirmoqchimisiz?
    </p>
    <div className="flex gap-2 mt-5 font-semibold">
      <button
        onClick={handleClose}
        className="bg-primary text-white p-3 w-1/2  text-sm flex items-center gap-2 justify-center rounded-full"
      >
        Yo‘q, kerak emas
      </button>
      <button className="p-3 w-1/2 flex items-center text-sm gap-2 justify-center rounded-full border">
        Ha, albatta
      </button>
    </div>
  </Modal>
);

export default DeleteCardModal;
