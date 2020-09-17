import React from "react";
import "../Css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
      <div className="header_center">
        <input type="text" placeholder="Where are you going" />
        <SearchIcon />
        
      </div>
      <Link to="/hostRegister" className="hostRegister_link" >
      <div className="header_right_button">
        <Button >Become a Host</Button> 
        </div>
        </Link>
      <div className="header_right">
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
