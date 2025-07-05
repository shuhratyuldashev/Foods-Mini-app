import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";

const HeaderFoodsListPage = () => {
  return (
    <header className="flex items-center flex-col gap-2 mt-5">
      <p className="font-semibold">Foods List</p>
      <DrawerAddNewFood />
    </header>
  );
};

const DrawerAddNewFood = () => (
  <Drawer>
    <DrawerTrigger className="border text-sm w-full p-4 rounded-full font-semibold">
      Add New Food
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Add New Food</DrawerTitle>
      </DrawerHeader>
      <main className="p-4">
        <form className="flex flex-col gap-2">
          <div>
            <label htmlFor="title" className="font-semibold text-sm">
              Title
            </label>
            <input
              placeholder="Title"
              id="title"
              type="text"
              className="p-2 border rounded-md w-full outline-none focus:ring-3 ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="image" className="font-semibold text-sm">
              Image
            </label>
            <input
              placeholder="Image"
              type="file"
              id="image"
              className="p-2 border rounded-md w-full outline-none focus:ring-3 ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="price" className="font-semibold text-sm">
              Price
            </label>
            <input
              placeholder="Price"
              type="number"
              id="price"
              className="p-2 border rounded-md w-full outline-none focus:ring-3 ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="description" className="font-semibold text-sm">
              Description
            </label>
            <textarea
              placeholder="Description"
              id="description"
              className="p-2 border rounded-md w-full outline-none focus:ring-3 ring-gray-300"
            />
          </div>

          <button className="mt-2 bg-primary p-4 font-semibold text-white text-sm rounded-full">
            Add New Food
          </button>
        </form>
      </main>
    </DrawerContent>
  </Drawer>
);

export default HeaderFoodsListPage;
