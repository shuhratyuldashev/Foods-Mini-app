const CartCardInfo = ({ name, price }: { name: string; price: string }) => (
  <div>
    <h2 className="font-semibold text-lg">{name}</h2>
    <p className="text-primary text-sm font-bold">{price} UZS</p>
  </div>
);

export default CartCardInfo;
