import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useCustomizable } from "../../../context/useCustomizable";

const Navbar = (props) => {
  const {
    primaryBackground,
    drawerWidth,
    navbarHeight,
    toggleSidebarExtension,
  } = useCustomizable();

  return (
    <AppBar
      position="relative"
      color={primaryBackground}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        boxShadow: "none",
        height: `${navbarHeight}px`,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
