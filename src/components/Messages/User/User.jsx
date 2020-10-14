import React from "react";
import styles from "./User.module.css";
import {NavLink} from "react-router-dom";

const User = ({id, name}) => {
    let path = `/messages/${id}`;

    return (
        <div className={styles.user} >
            <NavLink to={path} activeClassName={styles.active}>{name}</NavLink>
        </div>
    )
};

export default User;