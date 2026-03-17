import { Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { APP_ROUTES } from "./AppRoutes";

interface IPrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const location = useLocation();
  const { isAuthenticated, isInitializing } = useAuth();

  if (isInitializing) {
    return <LoadingState>Validando sessao...</LoadingState>;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={APP_ROUTES.login}
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
};

const LoadingState = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  color: var(--color-text-strong);
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export default PrivateRoute;
