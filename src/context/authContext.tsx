import React, { createContext, useContext, useState } from "react";

type ContextType = {
  user: { username: string };
  login: Function;
  logout: Function;
};

const AuthContext = createContext<ContextType>({
  user: { username: "" },
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [user, setUser] = useState({ username: "" });

  const login = (userData: { username: string }) => {
    setUser(userData);
  };

  const logout = () => {
    setUser({ username: "" });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
