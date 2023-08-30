import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  const persistToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  const logout = (token) => {
    localStorage.setItem("token", token);
    setToken(null);
    navigate("/");
  };

  const contextValue = { token, persistToken, logout };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
