import React from "react";
import styles from './ShowError.module.css';

const ShowError = ({closeError, appErrors}) => {
    const errorDescription = appErrors.map(v => {
        return (
            <div>
                <h1>{v.errorName}</h1>
                <p>{v.errorMessage}</p>
            </div>
        )
    });

    return (
        <div className={styles.showError}>
            {errorDescription}
            <div>
                <span onClick={closeError}>X</span>
            </div>
        </div>
    )
};

export default ShowError;