import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Input from "../Input/Input";

const InputTextQuestion = ({
  passedKey,
  question,
  updateTextAnswer,
  setIsNextButtonDisabled,
}) => {
  return (
    <Box key={passedKey} sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {`${passedKey}. ${question.question_text}`}
      </Typography>
      <Input
        sx={{ width: "100%" }}
        onChange={(e) => {
          updateTextAnswer(question.id, e.target.value);
          if (e.target.value === "") setIsNextButtonDisabled(true);
          else setIsNextButtonDisabled(false);
        }}
      />
      <Typography variant="p">{question.answer}</Typography>
    </Box>
  );
};

export default InputTextQuestion;
