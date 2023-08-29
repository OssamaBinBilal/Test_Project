import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Switch = ({ type1, type2, currentType, toggleType }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          borderRadius: "20px",
          position: "relative",
          background: "#e5cfff",
        }}
      >
        <Box
          style={{
            transform: `translateX(${currentType === type1 ? 0 : "100px"})`,
            width: "100px",
            height: "40px",
            position: "absolute",
            boxShadow: `1px 0 2px #b473ff`,
            borderRadius: "20px",
            background: `#8400ed`,
            transition: `all 0.5s ease`,
          }}
        />
        <Button
          disableRipple
          variant="text"
          sx={{
            color: currentType === type1 ? "#ffffff" : "#5316AE",
            width: "100px",
            height: "40px",
            fontWeight: "bold",
          }}
          onClick={toggleType}
        >
          {type1}
        </Button>
        <Button
          disableRipple
          variant="text"
          sx={{
            color: currentType === type2 ? "#ffffff" : "#5316AE",
            width: "100px",
            height: "40px",
            fontWeight: "bold",
          }}
          onClick={toggleType}
        >
          {type2}
        </Button>
      </Box>
    </Box>
  );
};

export default Switch;
