import React, { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";
import { Navigate } from "react-router-dom";
import { validateToken } from "../../apis/teacher/teacher";

const ProtectedTeacherRoute = ({ children }) => {
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
  }, []);

  return (
    <>
      {isLoading ? (
        <>loading...</>
      ) : (
        <>
          {isValidToken ? (
            <>{children}</>
          ) : (
            <>{<Navigate to="/teacher/login" />}</>
          )}
        </>
      )}
    </>
  );
};

export default ProtectedTeacherRoute;
