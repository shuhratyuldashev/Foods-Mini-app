import Modal from "@/shared/ui/modal";
import { Link } from "react-router-dom";

const SignOutModal = ({
  handleClose,
  isOpen,
}: {
  handleClose: () => void;
  isOpen: boolean;
}) => (
  <Modal isOpen={isOpen} handleClose={handleClose} title="Chiqish">
    <p className="text-center mt-4 text-gray-400 font-semibold text-sm">
      Profilingizdan chiqishni xohlaysizmi?
    </p>
    <div className="flex gap-2 mt-5 font-semibold">
      <button
        onClick={handleClose}
        className="border p-3 w-1/2 flex items-center gap-2 justify-center rounded-full"
      >
        Bekor qilish
      </button>
      <Link className="w-1/2" to="/sign-in">
      <button className="p-3 w-full flex items-center gap-2 justify-center rounded-full bg-primary text-white">
        Chiqish
      </button>
      </Link>
    </div>
  </Modal>
);

export default SignOutModal;
