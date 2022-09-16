import React, { createContext, useState } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
