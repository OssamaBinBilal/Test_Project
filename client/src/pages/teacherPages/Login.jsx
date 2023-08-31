import React, { useState } from "react";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/teacher/teacher";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { persistToken } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((response) => {
        persistToken(response.data.token);
        navigate("/teacher");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
