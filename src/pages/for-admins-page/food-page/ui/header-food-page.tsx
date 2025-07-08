import Modal from "@/shared/ui/modal";
import React from "react";
import { Link } from "react-router-dom";

const HeaderFoodPage = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    React.useState<boolean>(false);
  return (
    <header className="flex w-full justify-between">
      <Link to="/admin/foods">
        <button className="p-2 border rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Link>
      <button
        onClick={() => setIsDeleteModalOpen(true)}
        className="p-2 border rounded-full text-red-600"
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
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>

      <DeleteFoodModal
        isOpen={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
      />
    </header>
  );
};

const DeleteFoodModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => (
  <Modal isOpen={isOpen} handleClose={handleClose} title="Taomni o‘chirish">
    <p className="text-sm text-center font-semibold text-gray-500">
      Ushbu taomni o‘chirmoqchimisiz?
    </p>
    <div className="flex mt-4 gap-2">
      <button
        onClick={handleClose}
        className="bg-primary p-3 font-semibold text-sm text-white rounded-full w-full"
      >
        Yo‘q
      </button>
      <button className="border p-3 font-semibold text-sm rounded-full w-full">
        Ha
      </button>
    </div>
  </Modal>
);

export default HeaderFoodPage;
