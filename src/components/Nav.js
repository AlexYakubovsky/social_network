import React from "react";
import "../App.css";
// import style from "./nav.module.css"

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><a href='#'>profile</a></li>
                <li><a href='#'>friends</a></li>
                <li><a href='#'>messages</a></li>
            </ul>
        </nav>
    );
};

export default Nav;