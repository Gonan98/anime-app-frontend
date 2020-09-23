import React, { useState } from "react";
import axios from "axios";

function UserRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [registro, setRegistro] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post('/api/signup', {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setLoading(false);
        setRegistro(true);
      })
      .catch((err) => {
        console.log(err);
        setError('Este correo o usuario ya está registrado');
      });
  };

  const showPasswordAlert = () => {
    if (
      confirmPassword !== password &&
      confirmPassword.length >= password.length
    ) {
      return (
        <div className="alert alert-danger" role="alert">
          Las contraseñas no coinciden
        </div>
      );
    }
  };

  const showSignupAlert = () => {
    if (registro) {
      return (
        <div className="alert alert-success" role="alert">
          Se registró correctamente
        </div>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      );
    }
  }

  const showSpinner = () => {
    if (loading) {
      return (
        <div className="spinner-border text-primary" role="status" />
      );
    }
  }

  return (
    <div className="card mt-5 mx-auto" style={{ width: "30rem" }}>
      {showSignupAlert()}
      {showError()}
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Confirma contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="form-control"
            />
            {showPasswordAlert()}
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      </div>
      {showSpinner()}
    </div>
  );
}

export default UserRegister;
