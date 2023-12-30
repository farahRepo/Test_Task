import React from "react";
import  "./Header.css";
import urqaLogo from "../assets/images/urqaLogo.png";

const Header=({userName})=>
{
    return(
        <header className="header">
            <img src={urqaLogo} alt="Urqa Logo" className="logo"></img>
          <div className="left-header-block-container">
          <button className="switch-button">Switch to Student</button>
          <div className="separator"></div>
          <p>Hello, <strong>{userName}</strong></p>
          <div className="image-container"></div>
          </div>
        </header>
    )
}
export default Header
