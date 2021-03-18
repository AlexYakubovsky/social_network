import React from "react"
import logo from "../../assets/images/logo.png"
import logout from "../../assets/images/logout.png"
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"

const Header = ({isAuth, login, logoutUser}) => {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <img
                    className={styles.header__logo}
                    src={logo}
                    alt='logo'/>

                {!isAuth ? <NavLink to='/login'>Login</NavLink> :
                    <>
                        <h4>{login}</h4>
                        <button
                            className={styles.header__logout}
                            onClick={logoutUser}>
                            <img src={logout} alt=''/>
                        </button>
                    </>
                }
            </div>
        </header>
    )
}

export default Header