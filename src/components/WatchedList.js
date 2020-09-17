import React, { Fragment } from "react";
import WatchedAnime from "./WatchedAnime";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function WatchedList() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAnimes = async function() {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/animes',{headers:{'access-token': token}});
      setAnimes(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAnimes();
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
        reload={getAnimes}
      />
    ));
  };

  return (
    <Fragment>
      <div className="row row-cols-1 row-cols-md-3 p-4">
        {loadWatchedAnimes()}
      </div>
    </Fragment>
  );
}

export default WatchedList;
