import {
  DateRange,
  Home,
  Message,
  Notifications,
  Person,
  PowerOff,
  Settings,
} from "@material-ui/icons";
import React from "react";
import "../Styles/Menu.css";
import { ArrowDownward } from "@material-ui/icons";
function Menu() {
  return (
    <div className="menu">
      <div className="menu__profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkKTkKnqZE23RyW0_npSDjVKIVg_uLRmZbw&usqp=CAU"
          alt="profile_picture"
        />
        <div className="chatList__dropdown">
        <p>Itr Pol</p><ArrowDownward /></div>
      </div>
      <div className="menu__options">
        <div className="menu__option">
          <Home /> HOME
        </div>
        <div className="menu__option selected">
          <Message /> CHAT
        </div>
        <div className="menu__option">
          <Person /> CONTACT
        </div>
        <div className="menu__option">
          <Notifications /> NOTIFICATIONS
        </div>
        <div className="menu__option">
          <DateRange /> CALENDAR
        </div>
        <div className="menu__option">
          <Settings /> SETTINGS
        </div>
        <div className="menu__option bottom">
          <PowerOff /> LOG OUT
        </div>
      </div>
    </div>
  );
}

export default Menu;
