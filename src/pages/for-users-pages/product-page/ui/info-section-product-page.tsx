import { Separator } from "@/shared/ui/separator";

const InfoSectionProductPage = ({
  title,
  price,
  grade,
  description,
}: {
  title: string;
  price: string;
  grade: number;
  description: string;
}) => (
  <section className="p-4">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <p className="text-xl mt-2 font-bold text-primary">{price}</p>

    <div className="flex justify-between items-center bg-primary/10 font-medium w-full mt-5 rounded-md p-2">
      <div className="text-primary flex gap-2 items-center">
        $<p className="text-gray-400 text-sm">Tekin yetkazish</p>
      </div>
      <div className="text-primary flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-400 text-sm">20-30</p>
      </div>
      <div className="text-primary flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-400 text-sm">{grade}</p>
      </div>
    </div>
    <Separator className="my-5" />

    <div>
      <h2 className="text-lg font-bold">Tavsif</h2>
      <p className="mt-2 font-medium text-sm text-gray-400">{description}</p>
    </div>
  </section>
);

export default InfoSectionProductPage;
