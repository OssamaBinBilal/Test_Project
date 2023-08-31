import React, { useRef, useState } from "react";
import Input from "../../components/Input/Input";
import Switch from "../../components/Switch/Switch";
import { Box, Button } from "@mui/material";
import { createStudent, createTeacher } from "../../apis/admin/admin";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../../context/useSnackbar";
import isValidEmail from "../../utils/isValidEmail";

const RegisterUser = () => {
  const type1 = "Teacher";
  const type2 = "Student";

  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const { displaySnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [type, setType] = useState(type1);
  const toggleType = () => {
    type === type1 ? setType(type2) : setType(type1);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      displaySnackbar("All fields must be filled", "error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isValidEmail(email)) {
      displaySnackbar("The email format appears to be invalid", "error");
      return;
    }

    if (password !== confirmPassword) {
      displaySnackbar("Password fields don't match", "error");
      return;
    }

    if (type === "Student") {
      createStudent(firstname, lastname, email, password, selectedFile)
        .then((response) =>
          displaySnackbar("Student created successfully", "success")
        )
        .catch((e) => {
          if (e.response.status === 403) {
            navigate("/admin/login");
          }
          displaySnackbar(e.response.data.error, "error");
        });
    } else {
      createTeacher(firstname, lastname, email, password)
        .then((response) =>
          displaySnackbar("Teacher created successfully", "success")
        )
        .catch((e) => {
          if (e.response.status === 403) {
            navigate("/admin/login");
          }
          displaySnackbar(e.response.data.error, "error");
        });
    }
  };

  return (
    <Box
      sx={{
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Input
        inputRef={firstnameRef}
        label="Firstname"
        required
        sx={{ width: "min(500px, 90%)", mb: 1 }}
      />
      <Input
        inputRef={lastnameRef}
        label="Lastname"
        required
        sx={{ width: "min(500px, 90%)", mb: 1 }}
      />
      <Input
        inputRef={emailRef}
        label="Email"
        required
        sx={{ width: "min(500px, 90%)", mb: 1 }}
      />
      <Input
        inputRef={passwordRef}
        label="Password"
        required
        type="password"
        sx={{ width: "min(500px, 90%)", mb: 1 }}
      />
      <Input
        inputRef={confirmPasswordRef}
        label="Confirm Password"
        required
        type="password"
        sx={{ width: "min(500px, 90%)", mb: 5 }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={
          type === "Student"
            ? {
                width: "min(500px, 90%)",
                marginBottom: "40px",
              }
            : {
                width: "min(500px, 90%)",
                marginBottom: "40px",
                visibility: "hidden",
              }
        }
      />
      <Switch
        type1={type1}
        type2={type2}
        currentType={type}
        toggleType={toggleType}
      />

      <Button
        onClick={handleSubmit}
        variant="contained"
        sx={{ marginTop: 5, width: "min(500px, 90%)" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default RegisterUser;
