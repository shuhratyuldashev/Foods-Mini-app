const ChangePersonalDateForm = () => {
  return (
    <form className="mt-10 w-full flex flex-col gap-4">
      <div>
        <label className="text-sm font-semibold" htmlFor="fullname">
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>
      <div>
        <label className="text-sm font-semibold" htmlFor="date_of_birth">
          Date of birth
        </label>
        <input
          id="date_of_birth"
          type="date"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>

      <div>
        <label className="text-sm font-semibold" htmlFor="gender">
          Gender
        </label>
        <div
          id="fullname"
          className="flex justify-between items-center p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        >
          Gender
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold" htmlFor="number">
          Phone
        </label>
        <input
          id="number"
          type="number"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>

      <div>
        <label className="text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>

      <button className="p-4 w-full font-semibold mt-5 rounded-full bg-primary text-white">
        Save
      </button>
    </form>
  );
};

export default ChangePersonalDateForm;
