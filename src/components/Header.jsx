import React from "react";
import "../App.css";
import logo from "./../logo.jpg";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <img alt='logo' src={logo}/>
        </header>
    );
};

export default Header;