import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  
  return (
    <>
      {/* <MenuBar showmenu={showMenu} setShowMenu={setShowMenu} /> */}
      <Outlet />
    </>
  );
};

export default AuthLayout;
