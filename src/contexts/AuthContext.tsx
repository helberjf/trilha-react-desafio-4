import { createContext, useContext, useEffect, useState } from "react";

interface IUser {
  name: string;
  email: string;
}

interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = "@trilha-react-desafio-4:user";

const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY);

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // autenticação mockada para o desafio
    if (email === "admin@dio.com" && password === "123456") {
      const loggedUser = {
        name: "Helber",
        email,
      };

      setUser(loggedUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}