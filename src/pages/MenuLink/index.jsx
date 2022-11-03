import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.css"

const Menulink = ({ to, children }) => {
  const location = useLocation();
  const checkLocation = location.pathname === to ? "menuLink-active" : "";

  return (
    <Link to={to} className={`menuLink ${checkLocation}`}>
      {children}
    </Link>
  );
};

export default Menulink;
