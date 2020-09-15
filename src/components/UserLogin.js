import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

function UserLogin(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valid = await props.signIn(username,password);
    if (valid) {
      setRedirect(true);
    } else {
      setLoginError(true);
    }
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const redirectToHome = () => {
    if (redirect) {
      return <Redirect to="/" />;
    }
  };

  const showLoginError = () => {
    if (loginError) {
      return (
        <div className="alert alert-danger" role="alert">
          Usuario o contraseña incorrectos
        </div>
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
              type="text"
              value={username}
              onChange={handleChangeUsername}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Iniciar sesion
          </button>
          {showLoginError()}
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
