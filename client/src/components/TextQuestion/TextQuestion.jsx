import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TextQuestion = ({ passedKey, question, removeQuestion }) => {
  return (
    <Box key={passedKey} sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {`${passedKey}. ${question.text}`}{" "}
        <CloseIcon
          onClick={() => removeQuestion(question)}
          sx={{ color: "red" }}
        />
      </Typography>
      <Typography variant="p">{question.answer}</Typography>
    </Box>
  );
};

export default TextQuestion;
