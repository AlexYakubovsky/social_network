import React from "react"
import styles from "./Nav.module.css"
import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to='/profile' activeClassName={styles.active}>profile</NavLink>
                </li>
                <li>
                    <NavLink to='/messages' activeClassName={styles.active}>messages</NavLink>
                </li>
                <li>
                    <NavLink to='/friends' activeClassName={styles.active}>friends</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav