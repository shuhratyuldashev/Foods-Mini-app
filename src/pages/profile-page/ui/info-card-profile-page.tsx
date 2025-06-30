import burger_photo from "../../../shared/assets/images/img-product-card.png";
import { Separator } from "../../../shared/ui/separator";

const InfoCardProfilePage = () => (
  <section className="mt-5 rounded-md bg-white shadow py-3 px-2">
    <div className="flex items-center font-semibold justify-between">
      <p>My orders</p>
      <span className="text-sm text-primary">See All</span>
    </div>
    <div className="flex mt-3 items-center font-semibold justify-between">
      <p className="text-sm text-gray-400">
        Order ID <span className="text-black">888333777</span>
      </p>
      <span className="text-sm bg-primary text-white px-2 py-1 rounded-full">
        In Delivery
      </span>
    </div>
    <Separator className="my-2" />

    <div className="flex items-center">
      <div className="w-18  h-14">
        <img
          className="w-full h-full rounded-md object-cover"
          src={burger_photo}
          alt=""
        />
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col ml-2 justify-between">
          <h2 className="font-semibold">Burger With Meat</h2>
          <p className="text-sm text-primary font-bold">$ 12,230</p>
        </div>
        <p className="text-gray-400 text-sm font-medium">14 items</p>
      </div>
    </div>
  </section>
);

export default InfoCardProfilePage;
