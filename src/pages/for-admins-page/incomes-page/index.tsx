import BottomBar from "@/widgets/bottombar";

const history_by_cash = [
  {
    id: 1,
    date_time: "01.01.2025 18:00",
    price: "25,000 UZS",
  },
  {
    id: 2,
    date_time: "01.01.2025 18:00",
    price: "25,000 UZS",
  },
  {
    id: 3,
    date_time: "01.01.2025 18:00",
    price: "25,000 UZS",
  },
  {
    id: 2,
    date_time: "01.01.2025 18:00",
    price: "25,000 UZS",
  },
  {
    id: 3,
    date_time: "01.01.2025 18:00",
    price: "25,000 UZS",
  },
];

const IncomesPage = () => {
  return (
    <main className="p-4">
      <h2 className="text-center my-4 font-semibold">Daromad sahifasi</h2>
      <DashboardIncomes />

      <section className="mt-4 max-h-52 overflow-y-scroll border rounded-md flex flex-col">
        <p className="text-sm px-4 py-2 sticky top-0 bg-white w-full font-semibold text-gray-600">
          Naxt orqali:
        </p>
        <div className="flex flex-col gap-2 p-4">
          {history_by_cash.map((cash) => (
            <div
              key={cash.id}
              className="p-2 flex justify-between rounded-md bg-gray-100"
            >
              <p className="text-sm text-gray-600 font-medium">
                {cash.date_time}
              </p>
              <span className="font-bold text-primary">+{cash.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4 max-h-52 overflow-y-scroll border rounded-md flex flex-col">
        <p className="text-sm px-4 py-2 sticky top-0 bg-white w-full font-semibold text-gray-600">
          Karta orqali:
        </p>
        <div className="flex flex-col gap-2 p-4">
          {history_by_cash.map((cash) => (
            <div
              key={cash.id}
              className="p-2 flex justify-between rounded-md bg-gray-100"
            >
              <p className="text-sm text-gray-600 font-medium">
                {cash.date_time}
              </p>
              <span className="font-bold text-primary">+{cash.price}</span>
            </div>
          ))}
        </div>
      </section>

      <BottomBar isForAdmin currentPage="Daromad" />
    </main>
  );
};

const DashboardIncomes = () => (
  <section className="flex gap-2">
    <div className="w-full p-4 border rounded-md">
      <div className="flex text-sm gap-2 font-semibold text-gray-600 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          <path
            fillRule="evenodd"
            d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
            clipRule="evenodd"
          />
          <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
        </svg>
        Naxt orqali:
      </div>
      <h2 className="font-bold text-xl text-primary">2,000,000 UZS</h2>
    </div>
    <div className="w-full p-4 border rounded-md">
      <div className="flex text-sm gap-2 font-semibold text-gray-600 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
          <path
            fillRule="evenodd"
            d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
            clipRule="evenodd"
          />
        </svg>
        Karta orqali:
      </div>
      <h2 className="font-bold text-xl text-primary">2,000,000 UZS</h2>
    </div>
  </section>
);

export default IncomesPage;
