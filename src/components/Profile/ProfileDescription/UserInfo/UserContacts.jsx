import React from "react";
import {NavLink} from "react-router-dom";

const UserContacts = ({nameSocial, linkSocial}) => {
    return (
        <ul>
            {linkSocial && <li>{nameSocial}: <NavLink to={linkSocial}>link</NavLink></li>}
        </ul>
    )
};

export default UserContacts;