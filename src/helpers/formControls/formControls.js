import React from "react";
import styles from "./formControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;

    return (
        <div>
            <textarea className={hasError && styles.error_input} {...input} {...props}/>
            {hasError && <span className={styles.error_message}>{meta.error}</span>}
        </div>
    )
};