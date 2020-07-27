import React from "react";
import logo from "../../assets/images/logo.jpg";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <img alt='logo' src={logo}/>
        </header>
    );
};

export default Header;