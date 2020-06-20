import React from "react";
import styles from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href='#'>profile</a></li>
                <li><a href='#'>friends</a></li>
                <li><a href='#'>messages</a></li>
            </ul>
        </nav>
    );
};

export default Nav;