import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useCustomizable } from "../../../context/useCustomizable";
import CircularProgress from "@mui/material/CircularProgress";

const PageLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress variant="indeterminate" thickness={3} />
    </Box>
  );
};

const Mainbar = (props) => {
  const {
    primaryBackgroundMain,
    drawerWidth,
    navbarHeight,
    secondaryBackgroundMain,
    scrollbarColorMain,
  } = useCustomizable();

  const [loading, setLoading] = useState(false);

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
          {!loading ? props.children : <PageLoading />}
        </Box>
      </Box>
    </Box>
  );
};

export default Mainbar;
