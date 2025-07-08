import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/drawer";

const languages_list = [
  {
    id: 1,
    title: "Indonesia",
    icon: "🇮🇩",
  },
  {
    id: 2,
    title: "English (US)",
    icon: "🇮🇺🇸",
  },
  {
    id: 3,
    title: "Thainland",
    icon: "🇹🇭",
  },
  {
    id: 4,
    title: "Chinese",
    icon: "🇨🇳",
  },
];

const ChooseLanguageDrawer = ({
  currentLanguage,
  setCurrentLanguage,
}: {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
}) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-base">Til</p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{currentLanguage}</span>
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
      <DrawerContent>
        <div className="p-4 flex flex-col gap-2">
          <p className="font-semibold">Tilni tanglang</p>
          {languages_list.map((l) => (
            <div
              onClick={() => setCurrentLanguage(l.title)}
              className={`flex items-center gap-2 w-full p-2 border-1 ${currentLanguage === l.title && "border-primary border-2"} rounded-md`}
            >
              <div className="rounded-full py-1 px-2 bg-gray-200">{l.icon}</div>
              <p className="text-sm font-semibold">{l.title}</p>
              <span className="text-primary ml-auto">
                {currentLanguage === l.title && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ChooseLanguageDrawer;
