import React, { useState } from "react";
import axios from "axios";

function UserRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registro, setRegistro] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(process.env.API_URL || 'https://animefav.herokuapp.com/' + '/api/signup', {
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
        setRegistro(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
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

  return (
    <div className="card mt-5 mx-auto" style={{ width: "30rem" }}>
      {showSignupAlert()}
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              type="text"
              value={username}
              onChange={handleUserNameChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Confirma contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="form-control"
            />
            {showPasswordAlert()}
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
