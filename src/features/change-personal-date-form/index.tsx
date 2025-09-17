import { useEffect, useState } from "react";
import axios from "@/shared/axios";

const ChangePersonalDateForm = () => {
  const [userData, setUserData] = useState<any>(null);
  const [fullname, setFullname] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let storedUserId = localStorage.getItem("user_id");

      if (!storedUserId) {
        const params = new URLSearchParams(location.search);
        storedUserId = params.get("user_id");

        if (storedUserId) {
          localStorage.setItem("user_id", storedUserId);
        }
      }

      if (!storedUserId) return;
      setUserId(storedUserId);

      try {
        const res = await axios.get(`/profile/users/detail/${storedUserId}/`);
        setUserData(res.data);
        setFullname(res.data.fullname || ""); // input ichiga chiqarib qo’yamiz
      } catch {
        setUserData(null);
      }
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;

    try {
      const res = await axios.patch(`/profile/users/detail/${userId}/`, {
        fullname: fullname,
      });
      setUserData(res.data);
      alert("Full name updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 w-full flex flex-col gap-4"
    >
      <div>
        <label className="text-sm font-semibold" htmlFor="fullname">
          User Name
        </label>
        <input
          id="fullname"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="p-3 border rounded w-full outline-none focus:ring-3 focus:ring-gray-300 transition"
        />
      </div>

      <button
        type="submit"
        className="p-4 w-full font-semibold mt-5 rounded-full bg-primary text-white"
      >
        Save
      </button>
    </form>
  );
};

export default ChangePersonalDateForm;
