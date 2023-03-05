import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import logo from "../imgs/logo.png";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/* logo*/}
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
