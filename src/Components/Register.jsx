import React, { useState } from "react";
import moment from "moment";
import "./Register.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user) {
          auth.user
            .updateProfile({
              displayName: firstName + " " + lastName,
            })
            .then((s) => {
              history.push("/");
            });
        }
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="register">
      <div className="register-container">
        <h1>Create A New Account</h1>
        <h3> Quick and Easy</h3>
        <form>
          <center>
            <input
              type="name"
              placeholder="First Name"
              className="register-name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="name"
              placeholder="Last Name"
              className="register-name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </center>
          <center>
            <input
              type="email"
              placeholder="E-mail Address"
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
          <label className="register-date">Date Of Birth</label>
          <input
            name="date"
            type="date"
            max={moment().format("YYYY-MM-DD")}
            className="register-date2"
          />

          <h5 className="register-gender">Gender</h5>
          <div className="register-radio-container">
            <input type="radio" name="gender" value="male" />
            <label>Male</label>
            <input type="radio" name="gender" value="female" />
            <label>Female</label>
            <input type="radio" name="gender" value="Other" />
            <label>Other</label>
          </div>

          <p className="register-policy">
            By Clicking Sign Up, you agree to our{" "}
            <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You
            may recieve SMS notifications from us and can opt out at any time
          </p>

          <center>
            <button
              type="submit"
              className="register-register"
              onClick={register}
            >
              Register
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Register;
