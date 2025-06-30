
const AddNewCardForm = () => {
  return (
    <form className="mt-10 w-full flex flex-col gap-4">
      <div>
        <label className="text-sm font-semibold" htmlFor="name_card">
            Name on new Card
        </label>
        <input
          id="name_card"
          type="text"
          placeholder="Enter name"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>
      <div>
        <label className="text-sm font-semibold" htmlFor="card_number">
          Card number
        </label>
        <input
          id="card_number"
          placeholder="_ _ _ _/_ _ _ _/_ _ _ _/_ _ _ _"
          type="number"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>

      <div>
        <label className="text-sm font-semibold" htmlFor="card_type">
          Card Type
        </label>
        <div
          id="card_type"
          className="flex justify-between items-center p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        >
          Select Card Type
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
        <label className="text-sm font-semibold" htmlFor="date">
          Expiry Date
        </label>
        <input
          id="date"
          placeholder="MM / YY"
          type="date"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>

      <div>
        <label className="text-sm font-semibold" htmlFor="CVV">
          CVV
        </label>
        <input
          id="CVV"
          type="text"
          placeholder="_ _ _ _"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>

      <div>
        <label className="text-sm font-semibold" htmlFor="CVV">
          Billing Address
        </label>
        <input
          id="CVV"
          type="text"
          placeholder="Enter Address"
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>

      <button className="p-4 w-full font-semibold mt-5 rounded-full bg-primary text-white">
        Save Card
      </button>
    </form>
  )
}

export default AddNewCardForm