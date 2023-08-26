import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Typography } from "@mui/material";

const MCQ = ({ passedKey, mcq, handleRadioChange }) => {
  return (
    <div key={passedKey}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {`${passedKey}. ${mcq.questionText}`} delete lmao
      </Typography>
      <RadioGroup
        value={mcq.correctAnswer}
        onChange={(event) => handleRadioChange(event, mcq.id)}
      >
        {mcq.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default MCQ;
