import React from "react";
import "./SideBarRow.css";

const SideBarRow = ({ selected, title, avatar, ImageLink }) => {
  return (
    <div
      className={`sidebarRow ${selected && "selected"} ${avatar && "avatar"}`}
    >
      <div className="colorwrap">
        <img
          src={ImageLink}
          alt=""
          className={`sidebarRow-icon ${avatar && "avatar"}`}
        />
        <h2 className={`sidebarRow-title ${avatar && "avatar"}`}>{title}</h2>
      </div>
    </div>
  );
};

export default SideBarRow;
