import React from "react";
import styles from "./Dialog.module.css";

const Dialog = props => {
    return (
        <div className={styles.dialog}>
            {props.message}
        </div>
    )
};

export default Dialog;