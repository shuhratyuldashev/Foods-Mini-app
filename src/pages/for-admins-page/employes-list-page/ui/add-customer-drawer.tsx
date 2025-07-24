import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/shared/ui/drawer";

const DrawerAddNewEmployer = () => (
  <Drawer>
    <DrawerTrigger className="border text-sm w-full p-4 rounded-full font-semibold">
      Yangi xodim qo'shish
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Yangi xodim qo'shish</DrawerTitle>
      </DrawerHeader>
      <main className="p-4">
        <form className="flex flex-col gap-2">
          <div>
            <label htmlFor="title" className="font-semibold text-sm">
              Xodim Ismi
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
              Rasm
            </label>
            <input
              placeholder="Image"
              type="file"
              id="image"
              className="p-2 border rounded-md w-full outline-none focus:ring-3 ring-gray-300"
            />
          </div>
           <div>
            <label htmlFor="number" className="font-semibold text-sm">
              Raqami
            </label>
            <input
              placeholder="+998 99 999 99 99"
              id="number"
              className="p-2 border rounded-md w-full outline-none focus:ring-3 ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="price" className="font-semibold text-sm">
              Role
            </label>
            <div className="p-2 rounded-md border">
                Xodim roli tanlash
            </div>
          </div>

          <button className="mt-2 bg-primary p-4 font-semibold text-white text-sm rounded-full">
            Yangi xodim qo'shish
          </button>
        </form>
      </main>
    </DrawerContent>
  </Drawer>
);

export default DrawerAddNewEmployer;
