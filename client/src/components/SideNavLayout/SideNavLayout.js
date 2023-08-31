import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Mainbar from "./MainBar/Mainbar";
import { useState } from "react";

const SideNavLayout = ({ children, sidebarItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Sidebar
        mobileOpen={mobileOpen}
        sidebarItems={sidebarItems}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Mainbar handleDrawerToggle={handleDrawerToggle}>{children}</Mainbar>
    </>
  );
};

export default SideNavLayout;
