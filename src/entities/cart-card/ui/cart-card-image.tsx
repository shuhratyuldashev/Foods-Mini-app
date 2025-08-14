const CartCardImage = ({
  image,
  name,
}: {
  image?: string | null;
  name: string;
}) => (
  <div className="w-20 aspect-square">
    {image ? (
      <img
        src={`http://192.168.0.127:8090/media/images/${image}`}
        className="object-cover w-full h-full rounded"
        alt={name}
      />
    ) : (
      <div className="flex w-full h-full rounded bg-gray-200 text-xs items-center justify-center text-gray-500">
        No image
      </div>
    )}
  </div>
);

export default CartCardImage;
