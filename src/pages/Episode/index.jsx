import React, { useState, useEffect } from "react";
import "./styles.css";
import Banner from "../../components/Banner";
import image from "../../assets/rick-and-morty.webp";
import axios from "axios";

const Episode = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode");
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setApi(response.data);
    });
  }, [url]);

  console.log(api);

  return (
    <div id="episodes">
      <Banner
        title={"Episodes of Rick and Morty"}
        description={"Check out the episodes of the series below."}
        image={image}
      />

      <div>
        <ul className="episodes">
          {api.results &&
            api.results.map((episode) => {
              return (
                <li key={episode.id}>
                  <p className="episode-name">{episode.name}</p>
                  <p>{episode.episode}</p>
                  <p>{episode.air_date}</p>
                </li>
              );
            })}
        </ul>
        <div className="buttons">
          {api.info?.prev && (
            <a href="#buttons-end">
              <button onClick={() => setUrl(api.info.prev)}>Previous</button>
            </a>
          )}
          {api.info?.next && (
            <a href="#episodes">
              <button onClick={() => setUrl(api.info.next)}>Next</button>
            </a>
          )}
        </div>
      </div>
      <div id="buttons-end"></div>
    </div>
  );
};

export default Episode;
