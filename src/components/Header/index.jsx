import React from "react";
import Menulink from "../../pages/MenuLink";
import style from "./style.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
            <Menulink to={"/"}>Home</Menulink>
            <Menulink to={"/home"}>Home</Menulink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
