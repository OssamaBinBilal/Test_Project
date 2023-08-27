import React, { useRef, useState } from "react";
import Input from "../../components/Input/Input";
import Switch from "../../components/Switch/Switch";
import { Button } from "@mui/material";
import { createStudent } from "../../apis/admin/admin";

const RegisterUser = () => {
  const type1 = "Teacher";
  const type2 = "Student";

  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [type, setType] = useState(type1);
  const toggleType = () => {
    type === type1 ? setType(type2) : setType(type1);
  };

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
      console.log("All fields must be filled");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      console.log("Invalid email format");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    if (type === "Student") {
      createStudent(firstname, lastname, email, password)
        .then((response) => console.log(response))
        .catch((e) => console.log(e));
    }

    console.log(type);
  };

  return (
    <div>
      <Input inputRef={firstnameRef} label="Firstname" required />
      <Input inputRef={lastnameRef} label="Lastname" required />
      <Input inputRef={emailRef} label="Email" required />
      <Input inputRef={passwordRef} label="Password" required type="password" />
      <Input
        inputRef={confirmPasswordRef}
        label="Confirm Password"
        required
        type="password"
      />
      <Switch
        type1={type1}
        type2={type2}
        currentType={type}
        toggleType={toggleType}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default RegisterUser;
