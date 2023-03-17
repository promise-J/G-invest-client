import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MenuBar = ({ setShowMenu, showmenu }) => {
  return (
    <div
      style={{ width: showmenu ? "50vw" : "0" }}
      className="menu-bar"
    >
      <AiOutlineClose
        onClick={() => setShowMenu(false)}
        style={{
          position: "absolute",
          top: 20,
          right: 30,
          cursor: "pointer",
          color: "white",
          boxShadow: '2px 2px 2px white, -2px -2px 2px white',
          borderRadius: 14,
        }}
        size={25}
        color={'white'}
      />
    </div>
  );
};

export default MenuBar;
