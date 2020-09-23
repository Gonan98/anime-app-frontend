import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({setIsAuth, username}) => {

  const signOut = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  }

  const navigationUser = () => {
    if (username) {
      return (
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/vistos">
                Vistos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/por-ver">
                Por ver
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-right">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/perfil">
                {username}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/"
                onClick={signOut}
              >
                Salir
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-right">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/signin">
                Iniciar Sesion
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Animefav
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {navigationUser()}
    </nav>
  );
};

export default Navigation;
