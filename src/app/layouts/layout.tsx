import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { checkAuth } from "@/shared/api/check-auth";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    checkAuth();
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
