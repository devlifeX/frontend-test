import React, { createContext, useContext, useState } from "react";

type ContextType = {
  user: UserData;
  login: Function;
  logout: Function;
  register: Function;
};

type UserData = {
  email?: string;
  phoneNumber?: string;
  password?: string;
};

const AuthContext = createContext<ContextType>({
  user: { email: "", phoneNumber: "", password: "" },
  login: () => {},
  logout: () => {},
  register: () => {},
});

export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [user, setUser] = useState<UserData>({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const login = (userData: UserData) => {
    setUser(userData);
  };

  const register = (userData: UserData) => {
    // setUser(userData);
  };

  const logout = () => {
    setUser({ email: "" });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
