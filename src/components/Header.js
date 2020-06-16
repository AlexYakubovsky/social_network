import React from "react";
import "../App.css";
import logo from "./../logo.jpg";
// import style from "./header.module.css"

const Header = () => {
    return (
        <header className='header'>
            <img src={logo}/>
        </header>
    );
};

export default Header;