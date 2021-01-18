import React from "react";
import { Link } from "react-router-dom";
import "./RegisterHeader.css";

const RegisterHeader = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img
            src="https://i.ibb.co/WzybLQK/del.png"
            alt="facebook logo"
            className="header-logo"
          />
        </Link>
      </div>
      <div className="header-right">
        <form>
          <input className="header-input1" type="Email" placeholder="email" />
          <input
            className="header-input2"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="header-submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterHeader;
