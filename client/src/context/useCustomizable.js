import { useTheme } from "@mui/material";
import { createContext, useContext, useState } from "react";

const CustomizableContext = createContext();

const CustomizableProvider = ({ children }) => {
  const theme = useTheme();

  //customizable data
  const loginHeading = "Enter RT-9";
  const loginSubHeading = "We're glad to see you come back!";
  const primaryBackground = "white";
  const secondaryBackground = "lightGrey";
  const scrollbarColor = "darkGrey";
  const navbarHeight = 60;
  const collapsedSidebarWidth = 80;
  const extendedSidebarWidth = 240;
  const primaryBackgroundMain = theme.palette.white.main;
  const secondaryBackgroundMain = theme.palette.lightGrey.main;
  const scrollbarColorMain = theme.palette.darkGrey.main;

  const [drawerWidth, setDrawerWidth] = useState(extendedSidebarWidth);
  const [sideBarExtended, setSidebarExtended] = useState(true);

  const toggleSidebar = () => {
    setSidebarExtended((prev) => !prev);
    setDrawerWidth(
      drawerWidth == collapsedSidebarWidth
        ? extendedSidebarWidth
        : collapsedSidebarWidth
    );
  };

  const contextValue = {
    loginHeading,
    loginSubHeading,
    primaryBackground,
    primaryBackgroundMain,
    secondaryBackground,
    secondaryBackgroundMain,
    navbarHeight,
    drawerWidth,
    scrollbarColor,
    scrollbarColorMain,
    setDrawerWidth,
    sideBarExtended,
    setSidebarExtended,
    toggleSidebar,
  };

  return (
    <CustomizableContext.Provider value={contextValue}>
      {children}
    </CustomizableContext.Provider>
  );
};

const useCustomizable = () => useContext(CustomizableContext);

export { CustomizableProvider, useCustomizable };
