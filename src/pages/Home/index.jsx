import React from "react";
import Card from "../../components/Card";
import "./styles.css";
import personagems from "../../json/personages.json";
import Banner from "../../components/Banner";
import image from "../../assets/rick-and-morty.webp";

const Home = () => {
  return (
    <section className="section-1">
      <Banner
        title={"Ricky and Morty"}
        description={
          "An animated series that follows the exploits of a super scientist and his not-so-bright grandson."
        }
        image={image}
      />
      <div className="cards">
        {personagems.map((personagem) => {
          return <Card key={personagem.id} card={personagem} />;
        })}
      </div>
    </section>
  );
};

export default Home;
