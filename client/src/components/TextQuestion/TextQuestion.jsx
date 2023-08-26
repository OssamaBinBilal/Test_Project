import React from "react";
import { Box, Typography } from "@mui/material";

const TextQuestion = ({ passedKey, question }) => {
  return (
    <Box key={passedKey} sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {`${passedKey}. ${question.text}`} delete lmao
      </Typography>
      <Typography variant="p">{question.answer}</Typography>
    </Box>
  );
};

export default TextQuestion;
