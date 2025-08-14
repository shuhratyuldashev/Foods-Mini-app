const CartTotalInfo = ({
  total,
  discount,
  finalTotal,
}: {
  total: number;
  discount: number;
  finalTotal: number;
}) => (
  <section className="mt-10 border p-4 rounded-2xl">
    <h2 className="font-semibold text-lg">Umumiy to'lov</h2>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-gray-500">Jami mahsulotlar</p>
        <p className="font-bold">{total.toLocaleString()} UZS</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Yetkazib berish narxi</p>
        <p className="font-bold">Bepul</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Chegirma</p>
        <p className="font-bold">-{discount.toLocaleString()} UZS</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Jami</p>
        <p className="font-bold">{finalTotal.toLocaleString()} UZS</p>
      </div>
    </div>
  </section>
);

export default CartTotalInfo;
