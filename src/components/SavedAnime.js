import React from "react";
import { deleteAnime, updateAnime } from "../helpers/animeHelper";

export default function SavedAnime({id, title, episodes, type, image_url, reload, typeItem}) {
  const handleClick = async () => {
    try {
      if (window.confirm("¿Desea quitarlo de la lista?")) {
        const token = localStorage.getItem("token");
        await deleteAnime(token, id);
        reload(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const watched = () => {
    const token = localStorage.getItem('token');
    updateAnime(token, {id, status: 'watched'})
      .then(res=>{
        console.log(res);
        reload(true);
      })
      .catch(console.error);
  }

  const renderButtons = () => {
    if (typeItem === "POR VER") {
      return (
        <div className="d-flex justify-content-between">
          <button className="btn btn-success btn-sm" onClick={watched}>
            <i className="fas fa-check-double" />
          </button>
          <button className="btn btn-danger btn-sm" onClick={handleClick}>
            <i className="fas fa-times" aria-hidden="true" />
          </button>
        </div>
      ); 
    } else {
      return (
        <button className="btn btn-danger btn-sm" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </button>
      );
    }
  }

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
              {renderButtons()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
