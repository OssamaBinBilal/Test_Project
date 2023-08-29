import React, { useState } from "react";
import { login } from "../../apis/admin/admin";
import { useUser } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { persistToken } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((response) => {
        persistToken(response.data.token);
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
