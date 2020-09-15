import React from "react";
import axios from "axios";

export default function WatchedAnime(props) {
  const handleClick = () => {
    const token = localStorage.getItem('token');
    axios
      .delete(`http://localhost:5000/api/animes/${props.id}`, {
        headers: { "access-token": token },
      })
      .then((res) => {
        console.log(res);
        props.reload();
      })
      .catch((err) => console.log(err));
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
              <button
                className="btn btn-warning btn-sm fas fa-times"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
