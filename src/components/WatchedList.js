import React from "react";
import WatchedAnime from "./WatchedAnime";
import { useState, useEffect } from "react";
import { getWatchedAnimes } from "../helpers/animeHelper";

function WatchedList() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const token = localStorage.getItem('token');
    getWatchedAnimes(token)
      .then(res => {
        setAnimes(res);
        setLoading(false);
      }).catch(err => console.log(err));
  }, []);

  const loadWatchedAnimes = () => {
    if (loading) {
      return <h3 className="m-5">Cargando...</h3>;
    }

    return animes.map((animu, index) => (
      <WatchedAnime
        key={index}
        id={animu._id}
        title={animu.title}
        synopsis={animu.synopsis}
        episodes={animu.episodes}
        type={animu.type}
        image_url={animu.image_url}
        setAnimes={setAnimes}
      />
    ));
  };

  return (
    <div className="p-4">
      <h2>Animes vistos</h2>
      <div className="row row-cols-1 row-cols-md-3">
        {loadWatchedAnimes()}
      </div>
    </div>
  );
}

export default WatchedList;
