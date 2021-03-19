import React from "react"
import styles from './ShowError.module.css'

const ShowError = ({closeError, appErrors}) => {
    const errorDescription = appErrors.map(v => {
        return (
            <li>
                <h1>{v.errorName}</h1>
                <p>{v.errorMessage}</p>
            </li>
        )
    })

    return (
        <div className={styles.show_error__modal}>
            <div className={styles.show_error__modal_container}>
                <ul>
                    {errorDescription}
                </ul>

                <span className={styles.show_error__modal_close} onClick={closeError}> </span>
            </div>
        </div>
    )
}

export default ShowError