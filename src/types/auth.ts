export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export interface AuthContextValue {
  user: AuthenticatedUser | null;
  status: AuthStatus;
  error: string | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  isAuthenticating: boolean;
  login: (credentials: AuthCredentials) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}
