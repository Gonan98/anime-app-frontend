import React, { Fragment, useState, useEffect } from "react";

import axios from "axios";
import Anime from "./Anime";
import { getAllAnimes } from "../helpers/animeHelper";

function AnimeList() {
  const [nombre, setNombre] = useState('');
  const [animes, setAnimes] = useState([]);
  const [savedAnimes, setSavedAnimes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getAllAnimes(token)
        .then(res => setSavedAnimes(res))
        .catch(err => console.log(err));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${nombre}`)
      .then((res) => {
        const { results } = res.data;
        setAnimes(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isSaved = (title) => {
    return savedAnimes.filter((anime) => anime.title === title).length > 0;
  };

  const loadAnimes = () => {
    return animes.map((animu) => (
      <Anime
        key={animu.mal_id}
        id={animu.mal_id}
        title={animu.title}
        synopsis={animu.synopsis}
        episodes={animu.episodes}
        type={animu.type}
        image_url={animu.image_url}
        saved={isSaved(animu.title)}
      />
    ));
  };

  return (
    <Fragment>
      <form className="form-inline mt-4" onSubmit={handleSubmit}>
        <div className="mx-auto">
          <input
            className="form-control"
            placeholder="Nombre del anime"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </div>
      </form>
      <div className="row row-cols-1 row-cols-md-4 p-4">{loadAnimes()}</div>
    </Fragment>
  );
}

export default AnimeList;
