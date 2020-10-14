import React from "react";
import styles from "./Dialog.module.css";

const Dialog = ({message}) => {
    return (
        <div className={styles.dialog}>
            {message}
        </div>
    )
};

export default Dialog;