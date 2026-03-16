import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface IPrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;