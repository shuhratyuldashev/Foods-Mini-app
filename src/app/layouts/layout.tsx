import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setUserData } from "@/shared/store/user";
import axios from "@/shared/axios";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const userId = localStorage.getItem("user_id");
      if (!userId) return;

      try {
        const res = await axios.get(`/profile/users/detail/${userId}/`);
        setUserData(res.data);
      } catch {
        setUserData(null);
      }
    })();
  }, [location.pathname]);

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
