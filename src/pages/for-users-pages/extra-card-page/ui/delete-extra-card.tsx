import Modal from "@/shared/ui/modal";
import { motion } from "framer-motion";

const DeleteCardModal = ({
  isOpen,
  handleClose,
}: {
  handleClose: () => void;
  isOpen: boolean;
}) => (
  <Modal title="Confirm Delete" isOpen={isOpen} handleClose={handleClose}>
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
  </Modal>
);

export default DeleteCardModal;
