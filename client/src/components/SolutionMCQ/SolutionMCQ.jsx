import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Box, Typography } from "@mui/material";

const SolutionMCQ = ({ passedKey, mcq }) => {
  return (
    <Box key={passedKey} sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        <Typography variant="span">
          {`${passedKey}. ${mcq.question_statement}`}
        </Typography>
      </Typography>
      <RadioGroup value={mcq.userAnswer} onChange={() => {}}>
        {mcq.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
      <Typography sx={{ mt: 3 }}>
        <span style={{ fontWeight: "bold" }}>Correct Answer: </span>
        <span
          style={
            mcq.correct_answer === mcq.userAnswer
              ? { color: "green" }
              : { color: "red" }
          }
        >
          {mcq.correct_answer}
        </span>
      </Typography>
      <Typography sx={{ mt: 3, fontWeight: "bold" }}>
        Score: {mcq.obtainedScore} / {mcq.max_score}
      </Typography>
    </Box>
  );
};

export default SolutionMCQ;
