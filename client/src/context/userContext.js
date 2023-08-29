import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const persistToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  const contextValue = { token, persistToken };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
