import React, { useState, useEffect } from 'react'
import { getToWatchAnimes } from '../helpers/animeHelper';
import ToWatchAnime from './WatchedAnime';

export default function ToWatchList() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect( () => {
      const token = localStorage.getItem('token');
      getToWatchAnimes(token)
        .then(res => {
          setAnimes(res);
          setLoading(false);
        }).catch(err => console.log(err));
    }, []);
  
    const loadAnimes = () => {
      if (loading) {
        return <h3 className="m-5">Cargando...</h3>;
      }
  
      return animes.map((animu, index) => (
        <ToWatchAnime
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
        <h2>Animes por ver</h2>
        <div className="row row-cols-1 row-cols-md-3">
          {loadAnimes()}
        </div>
      </div>
    );
}
