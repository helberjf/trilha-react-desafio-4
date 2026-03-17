import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export const APP_ROUTES = {
  login: "/",
  home: "/home",
} as const;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.login} element={<Login />} />
      <Route
        path={APP_ROUTES.home}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to={APP_ROUTES.login} replace />} />
    </Routes>
  );
};

export default AppRoutes;
