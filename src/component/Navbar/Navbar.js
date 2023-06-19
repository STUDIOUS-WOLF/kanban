import React from "react";
import "./Navbar.css";
import SearchIcon from "../../icons/search-normal.svg";
import notification from "../../icons/notification.svg";
import message from "../../icons/message-question.svg";
import calander from "../../icons/calendar-2.svg";
import ArrowDown from "../../icons/arrow-down.svg";
import UserIcon from "../UserIcon/UserIcon";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <div className="searchBar">
          <img src={SearchIcon} className="searchIcon" />
          <input className="input" placeholder="Search Here"></input>
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarIcons">
          <img src={calander} />
          <img src={message} />
          <img src={notification} />
        </div>
        <div className="user">
          <div className="userInfo">
            <text>user name</text>
            <text>user location</text>
          </div>
          <UserIcon />
          <img src={ArrowDown} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
