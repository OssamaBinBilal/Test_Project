import { Box, useTheme } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useCustomizable } from "../../../context/useCustomizable";

const Mainbar = (props) => {
  const {
    primaryBackgroundMain,
    drawerWidth,
    navbarHeight,
    secondaryBackgroundMain,
    scrollbarColorMain,
  } = useCustomizable();

  return (
    <Box>
      <Navbar handleDrawerToggle={props.handleDrawerToggle} />
      <Box
        sx={{
          backgroundColor: primaryBackgroundMain,
        }}
      >
        <Box
          sx={{
            ml: { sm: `${drawerWidth}px` },
            borderTopLeftRadius: { sm: "10px" },
            borderTopRightRadius: { sm: "10px" },
            backgroundColor: secondaryBackgroundMain,
            height: `calc(100vh - ${navbarHeight + 20}px)`,
            p: "10px",
            mr: { sm: 2 },
            overflowY: "auto",
            listStyle: "none",
            "&::-webkit-scrollbar": {
              width: "5px",
              borderRadius: "100px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: scrollbarColorMain,
              borderRadius: "200px",
            },
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Mainbar;
