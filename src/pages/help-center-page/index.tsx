import HeaderHelpCenter from "./ui/header-help-center"
import { help_center_info_list } from "./constants/help-center-info-list"


const HelpCenterPage = () => {
  return (
    <main className="p-4">
        <HeaderHelpCenter />

        <section className="mt-6">
            <p className="font-semibold">Hi, how we can help you?</p>
            <div className="flex gap-2 border mt-4 rounded-md focus-within:ring-3 focus-within:ring-gray-300 transition">
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
            placeholder="Search..."
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
            {help_center_info_list.map((c) => (
            <div key={c.id} className="rounded-md p-2 shadow-xs flex gap-2">
                <div className="w-6 h-6 mt-2">
                    <img src={c.icon} alt={c.title} />
                </div>
                <div className="flex ml-2 flex-col justify-between">
                    <p className="font-semibold">{c.title}</p>
                    <p className="font-medium text-gray-400 text-xs">{c.description}</p>
                </div>
            </div>
        ))}
        </div>
        </section>

        
    </main>
  )
}

export default HelpCenterPage