import React from "react";
import styles from "./User.module.css";
import {NavLink} from "react-router-dom";

const User = props => {
    let path = `/messages/${props.id}`;

    return (
        <div className={styles.user} >
            <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
};

export default User;