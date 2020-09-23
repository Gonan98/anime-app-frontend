import React from "react";
import SavedAnime from "./SavedAnime";
import { useState, useEffect } from "react";
import { getToWatchAnimes, getWatchedAnimes } from "../helpers/animeHelper";

function SavedAnimeList({ type }) {
  const [animes, setAnimes] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const token = localStorage.getItem("token");
    if (type === 'VISTOS') {
      getWatchedAnimes(token)
      .then((res) => {
        setAnimes(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    } else {
      getToWatchAnimes(token)
      .then((res) => {
        setAnimes(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    }
    setReload(false);
  }, [type, reload]);

  const loadAnimes = () => {
    if (loading) {
      return <h3 className="m-5">Cargando...</h3>;
    }

    return animes.map((animu, index) => (
      <SavedAnime
        key={index}
        id={animu._id}
        title={animu.title}
        synopsis={animu.synopsis}
        episodes={animu.episodes}
        type={animu.type}
        image_url={animu.image_url}
        reload={setReload}
      />
    ));
  };

  return (
    <div className="p-4">
      {type === "VISTOS" ? <h2>Animes Vistos</h2> : <h2>Animes Por Ver</h2>}
      <div className="row row-cols-1 row-cols-md-3">{loadAnimes()}</div>
    </div>
  );
}

export default SavedAnimeList;
