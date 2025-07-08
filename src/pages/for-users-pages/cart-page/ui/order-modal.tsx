import Modal from "@/shared/ui/modal";
import React from "react";
import { Link } from "react-router-dom";

const OrderModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const [typePickUp, setTypePickUp] = React.useState<string>("");

  return (
    <Modal
      title="Yetkazib berish turi"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm text-gray-500">Yetkazib berish turini tanlang</p>

        <Link
          to="/order/pick-up"
          onClick={() => setTypePickUp("pick up")}
          className={`border ${typePickUp == "pick up" && "border-primary shadow-primary/25 shadow opacity-100"} rounded-2xl p-4 w-full`}
        >
          <h1
            className={`font-semibold ${typePickUp == "pick up" && "text-primary"}`}
          >
            O‘zingiz olib ketish
          </h1>
          <p className="text-gray-500 text-sm">
            Buyurtmangizni belgilangan manzildan o‘zingiz olib ketasiz.
          </p>
        </Link>

        <Link
          to="/order"
          onClick={() => setTypePickUp("deliver")}
          className={`border ${typePickUp == "deliver" && "border-primary shadow-primary/25 shadow opacity-100"} rounded-2xl p-4 w-full`}
        >
          <h1
            className={`font-semibold ${typePickUp == "deliver" && "text-primary"}`}
          >
            Kuryer orqali yetkazish
          </h1>
          <p className="text-gray-500 text-sm">
            Buyurtmangizni sizning manzilingizga yetkazamiz.
          </p>
        </Link>

        <Link
          to="/choose-place"
          onClick={() => setTypePickUp("in branch")}
          className={`border ${typePickUp == "in branch" && "border-primary shadow shadow-primary/25 opacity-100"} rounded-2xl p-4 w-full`}
        >
          <h1
            className={`font-semibold ${typePickUp == "in branch" && "text-primary"}`}
          >
            Filialda foydalanish
          </h1>
          <p className="text-gray-500 text-sm">
            Buyurtmangizni filialdan olib, bevosita joyida foydalaning.
          </p>
        </Link>
      </div>
    </Modal>
  );
};

export default OrderModal;
