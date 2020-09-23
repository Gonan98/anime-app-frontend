import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function UserLogin({setIsAuth}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post("/api/signin", {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        setLoading(false);
        setIsAuth(true);
        setRedirect(true);
      })
      .catch((err) => {
        console.error(err);
        setError('Usuario o contraseña incorrectos');
        setLoading(false);
      });
  };

  const redirectToHome = () => {
    if (redirect) {
      return <Redirect to="/" />;
    }
  };

  const showLoginError = () => {
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      );
    }
  };

  const showSpinner = () => {
    if (loading) {
      return (
        <div className="spinner-border text-primary" role="status" />
      );
    }
  };

  return (
    <div className="card mt-5 mx-auto" style={{ width: "24rem" }}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              autoFocus
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Iniciar sesion
          </button>
          {showLoginError()}
          {showSpinner()}
          <p>
            ¿No tiene una cuenta? Regístrese <Link to="/signup">aquí</Link>
          </p>
        </form>
      </div>
      {redirectToHome()}
    </div>
  );
}

export default UserLogin;
