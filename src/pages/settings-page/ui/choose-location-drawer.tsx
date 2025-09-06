import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/drawer";

const ChooseLocationDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <div className="flex justify-between">
          <p className="font-semibold text-base">Manzil</p>
          <div className="flex items-center gap-2">
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <form className="mt-10">
          <div className="flex gap-2 border rounded-md focus-within:ring-3 focus-within:ring-gray-300 transition">
            <button className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <input
              type="text"
              className="h-full w-full py-3 outline-none"
              placeholder="Qidirish..."
            />
          </div>

          <div className="my-4">
            <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3Aabcdef1234567890"
              width="100%"
              height="400"
              title="Xarita"
            ></iframe>
          </div>

          <button className="p-4 rounded-full bg-primary text-white text-sm font-semibold w-full">
            Tasdiqlash
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default ChooseLocationDrawer;
