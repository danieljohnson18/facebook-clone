import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import LoginHeader from "./Components/LoginHeader";
import Register from "./Components/Register";
import RegisterHeader from "./Components/RegisterHeader";
import HomeHeader from "./Components/HomeHeader";
import { auth } from "./firebase";
import SideBar from "./Components/SideBar.jsx";
import SideBar2 from "./Components/SideBar2";

function App() {
  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser);
    } else {
      setUser(false);
    }
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
          <Route path="/">
            <HomeHeader user={user} />
            <div className="app-page">
              <SideBar user={user} />
              <div className="app-posts"></div>
              <SideBar2 />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
