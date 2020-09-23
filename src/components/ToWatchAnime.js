import React from "react";
import { deleteAnime, getToWatchAnimes } from "../helpers/animeHelper";

export default function ToWatchAnime({
  id,
  title,
  episodes,
  type,
  image_url,
  setAnimes,
}) {
  const handleClick = async () => {
    try {
      if (window.confirm("¿Desea quitarlo de la lista?")) {
        const token = localStorage.getItem("token");
        await deleteAnime(token, id);
        const animes = await getToWatchAnimes(token);
        setAnimes(animes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col mb-4">
      <div className="card h-100">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={image_url} className="card-img" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <strong className="card-title">{title}</strong>
              <p className="card-text">Episodios: {episodes}</p>
              <p className="card-text">Tipo: {type}</p>
              <button className="btn btn-danger btn-sm" onClick={handleClick}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
