import React from "react";
import axios from "@/shared/axios";
import img_no_result from "@/shared/assets/images/no-results-img.png";
import { Product } from "@/shared/types/types";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        axios
          .get("/food/items/", { params: { name: query } })
          .then((res) => setResults(res.data?.results || []))
          .catch((err) => console.error(err));
      } else {
        setResults([]);
      }
    }, 400); 

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <main className="p-4">
      <h1 className="text-4xl mt-5 font-bold">
        Sevimli <br />
        taomingizni toping
      </h1>

      <form className="mt-10">
        <div className="flex gap-2 border rounded-md focus-within:ring-3 focus-within:ring-gray-300 transition">
          <button type="button" className="p-3">
            {/* 🔍 SVG Icon */}
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="h-full w-full py-3 outline-none"
            placeholder="Qidirish..."
          />
        </div>
      </form>

      {results.length > 0 ? (
        <ul className="mt-10 grid gap-4">
          {results.map((item: Product) => (
           <Link key={item.id} to={`/products/${item.id}`}>
            <li className="border p-4 rounded">
              <p>{item.name}</p>
              <p>{item.price} so‘m</p>
            </li>
            </Link>
          ))}
        </ul>
      ) : (
        <section className="flex flex-col items-center mt-10">
          <img src={img_no_result} alt="img_no_result" />
          <p className="text-gray-400 text-center">
            Iltimos, yozuvda xatolik yo‘qligini tekshiring yoki boshqa so‘z
            kiriting.
          </p>
        </section>
      )}
    </main>
  );
};

export default SearchPage;
