import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Anime(props) {
  const token = localStorage.getItem("token");
  const [guardado, setGuardado] = useState(false);

  useEffect(() => {
    setGuardado(props.saved);
  }, [props.saved]);

  const handleClick = () => {
    axios
      .post(
        process.env.API_URL || 'https://animefav.herokuapp.com/' + '/api/animes',
        {
          title: props.title,
          synopsis: props.synopsis,
          episodes: props.episodes,
          image_url: props.image_url,
          type: props.type,
        },
        {
          headers: {
            "access-token": token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setGuardado(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showButton = () => {
    if (guardado) {
      return <button className="btn btn-success">Añadido</button>;
    } else {
      return (
        <button className="btn btn-info" onClick={handleClick}>
          Añadir
        </button>
      );
    }
  };

  return (
    <div className="col mb-4">
      <div className="card h-100">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={props.image_url} className="card-img" alt={props.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <strong className="card-title">{props.title}</strong>
              <p className="card-text">Episodios: {props.episodes}</p>
              <p className="card-text">Tipo: {props.type}</p>
              {showButton()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
