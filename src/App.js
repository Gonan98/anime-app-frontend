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
import ToWatchList from "./components/ToWatchList";
import { getProfile } from "./helpers/userHelper";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getProfile(token)
        .then(res => {
          setIsAuth(true);
          setUsername(res.username);
        })
        .catch(err => console.log(err));
    } else {
      setUsername('');
      setIsAuth(false);
    }
  }, [isAuth]);

  return (
    <div className="px-3">
      <Router>
        <Navigation setIsAuth={setIsAuth} username={username} />
        <Switch>
          <Route exact path="/">
            <AnimeList />
          </Route>
          <Route path="/signup" component={UserRegister} />
          <Route path="/signin">
            <UserLogin setIsAuth={setIsAuth} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/vistos">
            <WatchedList />
          </Route>
          <Route path="/por-ver">
            <ToWatchList />
          </Route>
          <Route path="/animes/:id" component={AnimeInfo} />
          <Route path="/perfil" component={Perfil} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
