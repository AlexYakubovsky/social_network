import React from "react";
import styles from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href='/profile'>profile</a></li>
                <li><a href='/messages'>messages</a></li>
                <li><a href='/friends'>friends</a></li>
            </ul>
        </nav>
    );
};

export default Nav;