import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { authService } from "../services/auth/authService";
import {
  AuthContextValue,
  AuthCredentials,
  AuthenticatedUser,
  AuthStatus,
} from "../types/auth";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const storedUser = authService.getStoredUser();

    if (storedUser) {
      setUser(storedUser);
      setStatus("authenticated");
      return;
    }

    setStatus("unauthenticated");
  }, []);

  const login = async (credentials: AuthCredentials) => {
    setError(null);
    setIsAuthenticating(true);

    try {
      const authenticatedUser = await authService.login(credentials);

      setUser(authenticatedUser);
      setStatus("authenticated");
      authService.persistUser(authenticatedUser);

      return true;
    } catch (loginError) {
      setUser(null);
      setStatus("unauthenticated");
      authService.clearStoredUser();

      if (authService.isInvalidCredentialsError(loginError)) {
        setError("Credenciais invalidas. Use os dados de teste para acessar.");
      } else {
        setError("Nao foi possivel concluir o login. Tente novamente.");
      }

      return false;
    } finally {
      setIsAuthenticating(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
    setStatus("unauthenticated");
    authService.clearStoredUser();
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        error,
        isAuthenticated: status === "authenticated" && !!user,
        isInitializing: status === "loading",
        isAuthenticating,
        login,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth precisa ser usado dentro de AuthProvider.");
  }

  return context;
}
