import React, { useRef } from "react";
import { login } from "../../apis/admin/admin";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { Box, Button } from "@mui/material";
import { useSnackbar } from "../../context/useSnackbar";
import isValidEmail from "../../utils/isValidEmail";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { persistToken } = useUser();
  const navigate = useNavigate();

  const { displaySnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === "" || password === "") {
      displaySnackbar("Please fill in all the inputs", "error");
      return;
    }

    if (!isValidEmail(email)) {
      displaySnackbar("The email seems to be invalid", "error");
      return;
    }

    login(email, password)
      .then((response) => {
        persistToken(response.data.token);
        navigate("/admin");
      })
      .catch((e) => displaySnackbar(e.response.data.error, "error"));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "min(600px, 90%)" }}>
        <Box sx={{ mb: 1 }}>
          <Input
            sx={{ width: "100%" }}
            inputRef={emailRef}
            type="text"
            label="Email"
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Input
            sx={{ width: "100%" }}
            inputRef={passwordRef}
            type="password"
            label="Password"
          />
        </Box>
        <Box>
          <Button
            sx={{ width: "100%" }}
            onClick={handleSubmit}
            variant="contained"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
