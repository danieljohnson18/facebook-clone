import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const history = useHistory("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h3>Login to Facebook</h3>
        <form>
          <center>
            <input
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </center>
          <center>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </center>
          <center>
            <button type="submit" className="login-login" onClick={login}>
              Login
            </button>
          </center>
          <center>
            <h6>Forgotten Password</h6>
          </center>
          <center>
            <hr />
          </center>
          <center>
            <Link to="/register">
              <button className="login-createNewAccount">
                Create New Account
              </button>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
