interface CartActionsProps {
  deliveryType: string;
  setIsPaymentModalOpen: (open: boolean) => void;
  handleOrder: () => void;
  hasActiveItems: boolean;
}

const CartActions = ({
  deliveryType,
  setIsPaymentModalOpen,
  handleOrder,
  hasActiveItems,
}: CartActionsProps) => (
  <div className="mt-4 mb-16 flex flex-col gap-3">
    <button
      className="w-full rounded-full p-4 text-white font-semibold bg-primary"
      onClick={() => setIsPaymentModalOpen(true)}
    >
      Yetkazib berish turini tanlash
    </button>

    <button
      disabled={!deliveryType || !hasActiveItems}
      onClick={handleOrder}
      className="w-full rounded-full p-4 text-white font-semibold bg-primary disabled:opacity-50"
    >
      Buyurtma berish
    </button>
  </div>
);

export default CartActions;
