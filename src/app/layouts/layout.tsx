import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setUserData } from "@/shared/store/user";
import axios from "@/shared/axios";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    (async () => {
      let userId = localStorage.getItem("user_id");

      // Agar localStorage bo'sh bo'lsa query paramsdan olamiz
      if (!userId) {
        const params = new URLSearchParams(location.search);
        userId = params.get("user_id");

        if (userId) {
          localStorage.setItem("user_id", userId);
        }
      }

      if (!userId) return;

      try {
        const res = await axios.get(`/profile/users/detail/${userId}/`);
        setUserData(res.data);
      } catch {
        setUserData(null);
      }
    })();
  }, [location.pathname, location.search]);

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
