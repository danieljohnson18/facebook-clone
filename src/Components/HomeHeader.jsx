import React, { useState } from "react";
import "./HomeHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import TelegramIcon from "@material-ui/icons/Telegram";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FacebookIcon from "@material-ui/icons/Facebook";
import { auth } from "../firebase";

const HomeHeader = ({ user }) => {
  const history = useHistory("");

  if (user === false) {
    history.push("/login");
  }

  const logout = (event) => {
    event.preventDefault();
    auth.signOut();
    history.push("/login");
  };

  return (
    <div className="homeHeader">
      <div className="homeHeader-left">
        <Link to="/">
          <FacebookIcon
            fontSize="large"
            style={{ color: "white" }}
            className="homeHeader-logo"
          />
        </Link>
      </div>

      <div className="homeHeader-inputSearch">
        <input type="text" placeholder="Search" />
        <SearchIcon className="homeHeader-inputButton" />
      </div>
      <div className="homeHeader-icons">
        <section>
          <Avatar className="homeHeader-avatar" alt="" src="" />
          <h3 className="homeHeader-name">{user?.displayName}</h3>
        </section>

        <h3 className="homeHeader-dash"> | </h3>

        <section>
          <h3 className="homeHeader-name">Home</h3>
        </section>

        <h3 className="homeHeader-dash"> | </h3>

        <section>
          <h3 className="homeHeader-name">Find Friends</h3>
        </section>

        <h3 className="homeHeader-dash"> | </h3>

        <section>
          <h3 className="homeHeader-name">Create</h3>
        </section>

        <h3 className="homeHeader-dash"> | </h3>

        <section>
          <GroupAddIcon />
        </section>

        <h3 className="homeHeader-dash"> | </h3>

        <section>
          <TelegramIcon />
        </section>

        <h3 className="homeHeader-dash"> | </h3>

        <section>
          <NotificationsIcon />
        </section>

        <h3 className="homeHeader-dash"> | </h3>

        <section>
          <AssignmentIndIcon />
        </section>

        <h3 className="homeHeader-dash"> | </h3>

        <section>
          <div className="dropdown">
            <ArrowDropDownIcon className="dropdown" />
            <div className="dropdown-content">
              <a onClick={logout}>
                <p>Logout</p>
              </a>
            </div>
          </div>
        </section>

        <h3 className="homeHeader__dash"> | </h3>
      </div>
    </div>
  );
};

export default HomeHeader;
