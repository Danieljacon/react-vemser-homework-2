import React from "react";
import "./styles.css";

const Card = ({card}) => {
  return (
    <div className="card">
      <img
        src={card.image}
        alt={card.name}
      />
      <div>
        <h2 className="name">{card.name}</h2>
        <span>
          <p>{card.species}</p>
          <p>{card.gender}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
