import React from "react"
import styles from "./Footer.module.css"
import gitHub from "../../assets/images/github.png"

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <p>{date}. If you want to see more, welcome to my GitHub
                    <a href={'https://github.com/AlexYakubovsky?tab=repositories'} target='_blank'
                       rel='noopener noreferrer'>
                        <img src={gitHub} alt=''/>
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer