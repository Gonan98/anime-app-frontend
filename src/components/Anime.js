import React from "react";
import axios from "axios";
import { useState } from "react";

function Anime({title, synopsis, episodes, image_url, type, saved }) {
  const [isSaved, setIsSaved] = useState(saved);

  const handleClick = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "/api/animes",
        {
          title,
          synopsis,
          episodes,
          image_url,
          type,
          status: "watched",
        },
        {
          headers: {
            "access-token": token,
          },
        }
      )
      .then((res) => {
        setIsSaved(true);
      })
      .catch((err) => {
        window.alert("Debe iniciar sesion si quiere guardar un anime");
      });
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
      <button className="btn btn-primary btn-sm" onClick={handleClick}>
        <i className="fa fa-plus" aria-hidden="true" />
      </button>
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
