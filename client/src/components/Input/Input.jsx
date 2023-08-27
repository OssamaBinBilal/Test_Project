import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({
  inputRef,
  required = false,
  type = "text",
  error = false,
  label = "",
  helperText = "",
  sx,
  handleKeyDown = () => {},
}) => {
  return (
    <TextField
      inputRef={inputRef}
      required={required}
      type={type}
      error={error}
      label={label}
      helperText={helperText}
      sx={sx}
      variant="standard"
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
