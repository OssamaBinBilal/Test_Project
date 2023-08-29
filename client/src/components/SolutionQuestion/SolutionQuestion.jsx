import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SolutionQuestion = ({ passedKey, question }) => {
  return (
    <Box key={passedKey} sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {`${passedKey}. ${question.question_text}`}
      </Typography>
      <Typography variant="p">
        <span style={{ fontWeight: "bold" }}>User's Answer: </span>
        {question.userAnswer}
      </Typography>
      <p style={{ marginTop: "10px" }}>
        <Typography variant="p">
          <span style={{ fontWeight: "bold" }}>Correct Answer: </span>
          {question.correct_answer}
        </Typography>
      </p>
    </Box>
  );
};

export default SolutionQuestion;
