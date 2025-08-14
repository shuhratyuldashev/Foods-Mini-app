import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import { routes } from "./routes-structure";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          {routes.public.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {routes.auth.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {routes.staff.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {routes.admin.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

        </Route>
      </Routes>
   </BrowserRouter>
  );
};

export default AppRouter;
