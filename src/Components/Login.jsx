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
        if (
          e.message ===
          "The password is invalid or the user does not have a password"
        ) {
          alert("Please check your credentials again");
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          history.push("/register");
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
          });
        } else {
          alert(e.message);
        }
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
