import React, { Fragment, useState, useEffect } from "react";

import axios from "axios";
import Anime from "./Anime";

function AnimeList(props) {
  const [nombre, setNombre] = useState("");
  const [animes, setAnimes] = useState([]);
  const [watchedAnimes, setWatchedAnimes] = useState([]);

  useEffect(() => {
    getAnimes();
  }, []);

  const getAnimes = async function () {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const res = await axios.get(process.env.API_URL || 'https://animefav.herokuapp.com/' + '/api/animes', {
          headers: { "access-token": token },
        });
        setWatchedAnimes(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${nombre}`)
      .then((res) => {
        const data = res.data.results;
        setAnimes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const isSaved = (title) => {
    return watchedAnimes.filter((animu) => animu.title === title).length > 0;
  };

  const loadAnimes = () => {
    return animes.map((animu) => (
      <Anime
        key={animu.mal_id}
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
            onChange={handleChange}
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
