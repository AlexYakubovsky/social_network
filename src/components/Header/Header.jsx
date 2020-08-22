import React from "react";
import logo from "../../assets/images/logo.jpg";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <img alt='logo' src={logo}/>
                {!props.isAuth ? <NavLink to='/login'>Login</NavLink> :
                    <div>
                        {props.login}
                        <button onClick={props.logoutUser}>Logout</button>
                    </div>}
            </div>
        </header>
    );
};

export default Header;