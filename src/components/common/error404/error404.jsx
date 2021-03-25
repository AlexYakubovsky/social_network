import React from "react"
import {NavLink} from "react-router-dom"
import image404 from "../../../assets/images/image404.gif"
import styles from "./error404.module.css"

const error404 = () => {
    return (
        <div className={styles.error404}>
            <div className={styles.error404_container}>
                <div className={styles.error404__text}>
                    <h1>404. Page not found</h1>
                    <p>It may have been moved, or you just entered the wrong page address</p>
                    <NavLink to={'profile'}>Back to profile page</NavLink>
                </div>
                <div className={styles.error404__image}>
                    <img src={image404} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default error404