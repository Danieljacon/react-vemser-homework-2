import React from "react";
import Card from "../../components/Card";
import "./styles.css";
import personagems from "../../json/personages.json"

const Home = () => {
  return (
    <section className="section-1">
      <h1>Ricky and Morty</h1>
      <div className="cards">
        {personagems.map((personagem) => {
          return <Card card={personagem} />
        })}
      </div>
    </section>
  );
};

export default Home;
