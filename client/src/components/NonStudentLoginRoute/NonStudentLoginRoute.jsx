import React, { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";
import { Navigate } from "react-router-dom";
import { validateToken } from "../../apis/student/student";

const NonStudentLoginRoute = ({ children }) => {
  const { token } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    validateToken(token)
      .then((response) => {
        setIsLoading(false);
        setIsValidToken(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsValidToken(false);
      });
    //use finally instead
  }, []);

  return (
    <>
      {isLoading ? (
        <>loading...</>
      ) : (
        <>
          {!isValidToken ? <>{children}</> : <>{<Navigate to="/student" />}</>}
        </>
      )}
    </>
  );
};

export default NonStudentLoginRoute;
