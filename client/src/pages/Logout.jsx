import React, { useEffect } from "react";
import { useUser } from "../context/userContext";

const Logout = () => {
  const { logout } = useUser();

  useEffect(() => {
    logout();
  }, []);

  return <div>Logging out..</div>;
};

export default Logout;
