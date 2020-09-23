import React from "react";
import { useState } from "react";
import { saveAnime } from "../helpers/animeHelper";

function Anime({ title, synopsis, episodes, image_url, type, saved }) {
  const [isSaved, setIsSaved] = useState(saved);

  const handleClick = (status) => {
    const token = localStorage.getItem("token");
    saveAnime(token, { title, synopsis, episodes, image_url, type, status })
      .then((res) => setIsSaved(true))
      .catch((err) =>
        window.alert("Debe iniciar sesion si quiere guardar un anime")
      );
  };

  const showButton = () => {
    if (isSaved) {
      return (
        <button className="btn btn-info btn-sm">
          <i className="fa fa-check" aria-hidden="true" />
        </button>
      );
    }

    return (
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary btn-sm" onClick={() => handleClick('watched')}>
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
        <button className="btn btn-primary btn-sm" onClick={() => handleClick('towatch')} >
          <i className="fa fa-eye" aria-hidden="true" />
        </button>
      </div>
    );
  };

  return (
    <div className="container">
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
                {showButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
