import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MCQ = ({ passedKey, mcq, handleRadioChange, removeMCQ }) => {
  return (
    <Box key={passedKey} sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        <Typography variant="span">
          {`${passedKey}. ${mcq.questionText}`}
          <CloseIcon
            sx={{ color: "red" }}
            onClick={() => {
              removeMCQ(mcq);
            }}
          />
        </Typography>
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
    </Box>
  );
};

export default MCQ;
