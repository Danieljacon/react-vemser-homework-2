import React from "react";
import Menulink from "../MenuLink";
import style from "./style.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="menu-container">
        <li>
          <Menulink to={"/"}>Home</Menulink>
        </li>
        <li>
          <Menulink to={"/episodes"}>Episodes</Menulink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
