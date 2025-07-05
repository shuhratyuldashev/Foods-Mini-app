import Modal from "@/shared/ui/modal";

const SignOutModal = ({
  handleClose,
  isOpen,
}: {
  handleClose: () => void;
  isOpen: boolean;
}) => (
  <Modal isOpen={isOpen} handleClose={handleClose} title="Sign Out">
    <p className="text-center mt-4 text-gray-400 font-semibold text-sm">
      Do you want to log out?
    </p>
    <div className="flex gap-2 mt-5 font-semibold">
      <button
        onClick={handleClose}
        className="border p-3 w-1/2 flex items-center gap-2 justify-center rounded-full"
      >
        Cancel
      </button>
      <button className="p-3 w-1/2 flex items-center gap-2 justify-center rounded-full bg-primary text-white">
        Log Out
      </button>
    </div>
  </Modal>
);

export default SignOutModal;
