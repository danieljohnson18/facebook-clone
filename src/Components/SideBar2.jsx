import React from "react";
import "./SideBar2.css";
import AddBoxIcon from "@material-ui/icons/AddBox";

const SideBar2 = () => {
  return (
    <div className="sideBar2">
      <div className="sideBar2-languages">
        <p className="selected">English(UK)</p>
        <p>English(US)</p>
        <p>Yoruba</p>
        <p>Igbo</p>
        <p>Pidgin</p>
      </div>
      <div className="sideBar2-policies">
        <p>Privacy</p>
        <p>Terms</p>
        <p>Advertising</p>
        <p>Ad Choices</p>
        <p>Cookies</p>
        <p>More</p>
      </div>
      <p className="copyright">Facebook © 2021</p>
    </div>
  );
};

export default SideBar2;
