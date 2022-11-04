import React from "react";
import "./styles.css";

const Banner = ({ title, description, image }) => {
  return (
    <div className="banner-container">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Banner;
