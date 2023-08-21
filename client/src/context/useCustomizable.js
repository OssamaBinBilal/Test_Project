import { useTheme } from "@mui/material";
import { createContext, useContext, useState } from "react";

const CustomizableContext = createContext();

const CustomizableProvider = ({ children }) => {
  const theme = useTheme();

  //The values in pairs should remain the same
  const primaryBackground = "white";
  const primaryBackgroundMain = theme.palette.white.main;

  const secondaryBackground = "lightGrey";
  const secondaryBackgroundMain = theme.palette.lightGrey.main;

  const scrollbarColor = "darkGrey";
  const scrollbarColorMain = theme.palette.darkGrey.main;

  const navbarHeight = 60;
  const collapsedSidebarWidth = 80;
  const extendedSidebarWidth = 240;

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
