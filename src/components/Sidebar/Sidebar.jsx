import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import Oceanic from "../../images/Oceanic.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Oceanic} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Nombre y apellido</h2>
        <h4>Correo electrónico</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Te vieron:</p>
          <p className="sidebar__statNumber">1234</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">4321</p>
        </div>
      </div>
      <div className="sidebar__botton">
        <p>
            recent
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
