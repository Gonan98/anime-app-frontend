import React from "react";
import axios from "axios";
import { useState } from "react";

function Anime({ title, synopsis, episodes, image_url, type, saved }) {
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
          status: "towatch",
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
      <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
        <i className="fa fa-plus" aria-hidden="true" />
      </button>
    );
  };

  return (
    <>
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
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Anime;
