import React, { useContext, createContext, useState, useMemo } from "react";
import { getLogin } from "services/auth";
import { api } from "services/server";

import { IUser } from "interfaces/user";
interface authContextData {
  signed: boolean;
  singIn(email: string, password: string, remember: boolean): Promise<void>;
  singOut(): void;
  loading: boolean;
  error: any;
  user: IUser;
  setError: any;
}

const authContext = createContext<authContextData>({} as authContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState<string | null>(null);

  useMemo(() => {
    const localStoragedData = async () => {
      const userStoraged = await localStorage.getItem("@RNImobiliario:user");

      if (userStoraged) {
        setUser(JSON.parse(userStoraged));
        api.defaults.headers.Authorization = `Bearer ${
          JSON.parse(userStoraged).token
        }`;
      }
    };
    localStoragedData();
  }, []);

  async function singIn(email: string, password: string, remember: boolean) {
    setLoading(true);
    const data = await getLogin(email, password);

    if (data.user) {
      const { user } = data;
      if (remember) {
        localStorage.setItem("@RImobiliario:user", JSON.stringify(user));
      }
      setUser(user);
      api.defaults.headers.Authorization = `Bearer ${user.token}`;
      setLoading(false);
    } else {
      if (!data.message.response) {
        setError(`Erro: ${data.message}`);
        setLoading(false);
      } else {
        setError(
          `Erro: ${data.message.response.status} - ${data.message.response.statusText} ,
        ${data.message.response.data.message}
        `
        );
        setLoading(false);
      }
    }
  }

  async function singOut() {
    localStorage.clear();
    await setUser(null);
    await setLoading(false);
  }

  return (
    <authContext.Provider
      value={{
        signed: !!user,
        singIn,
        singOut,
        loading,
        error,
        user,
        setError,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(authContext);
  return context;
}
