import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import LoginHeader from "./Components/LoginHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
