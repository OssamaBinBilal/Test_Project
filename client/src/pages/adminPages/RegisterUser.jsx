import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Switch from "../../components/Switch/Switch";
import { Button } from "@mui/material";

const RegisterUser = () => {
  const type1 = "Teacher";
  const type2 = "Student";

  const [type, setType] = useState(type1);

  const toggleType = () => {
    type === type1 ? setType(type2) : setType(type1);
  };

  return (
    <div>
      <Input label="Username" required />
      <Input label="Email" required />
      <Input label="Password" required type="password" />
      <Input label="Confirm Password" required type="password" />
      <Switch
        type1={type1}
        type2={type2}
        currentType={type}
        toggleType={toggleType}
      />
      <Button>Submit</Button>
    </div>
  );
};

export default RegisterUser;
