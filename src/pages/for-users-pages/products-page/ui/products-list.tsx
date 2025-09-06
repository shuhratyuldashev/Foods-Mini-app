import { Link } from "react-router-dom";
import { Product } from "@/shared/types/types";

const ProductsList = ({ data }: { data: Product[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {data?.map((i: Product) => (
        <ProductCard key={i.id} {...i} />
      ))}
    </div>
  );
};

const ProductCard = ({ id, name, price, image }: Product) => {
  return (
    <Link
      to={`/products/${id}`}
      className="shadow-xs shadow-slate-100 bg-white rounded-md p-2"
    >
      <div className="w-full object-cover relative">
        {image ? (
          <img
            className="rounded object-cover w-full max-h-[120px] bg-gray-100"
            src={`${import.meta.env.VITE_MEDIA_URL}/media/images/${image}`}
            alt="IMAGE"
          />
        ) : (
          <div className="w-full h-[120px] bg-gray-100 flex items-center justify-center">
            NOT IMAGE
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="flex items-center text-sm font-medium justify-between my-1"></div>
        <p className="font-black text-primary">{price} UZS</p>
      </div>
    </Link>
  );
};

export default ProductsList;
