const ChangePersonalDateForm = () => {
  return (
    <form className="mt-10 w-full flex flex-col gap-4">
      <div>
        <label className="text-sm font-semibold" htmlFor="fullname">
          User Name
        </label>
        <input
          id="fullname"
          type="text"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
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

      <button className="p-4 w-full font-semibold mt-5 rounded-full bg-primary text-white">
        Save
      </button>
    </form>
  );
};

export default ChangePersonalDateForm;
