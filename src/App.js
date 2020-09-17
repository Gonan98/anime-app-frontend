import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AnimeList from "./components/AnimeList";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import About from "./components/About";
import WatchedList from "./components/WatchedList";
import AnimeInfo from "./components/AnimeInfo";
import Perfil from "./components/Perfil";
import axios from "axios";

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    getUsername();
  }, []);

  const getUsername = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const res = await axios.get(process.env.API_URL || 'https://animefav.herokuapp.com' + '/api/profile', {
          headers: { "access-token": token },
        });
        setUsername(res.data.username);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const signIn = async (username, password) => {
    try {
      const res = await axios.post(process.env.API_URL || 'https://animefav.herokuapp.com' + '/api/signin', {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      await getUsername();
      return true;
    } catch (error) {
      return false;
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUsername('');
  };

  return (
    <div className="p-2">
      <Router>
        <Navigation username={username} signOut={signOut} />
        <Switch>
          <Route path="/" component={AnimeList} />
          <Route path="/signup" component={UserRegister} />
          <Route path="/signin">
            <UserLogin signIn={signIn} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/vistos">
            <WatchedList />
          </Route>
          <Route path="/anime/:id" component={AnimeInfo} />
          <Route path="/perfil" component={Perfil} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
