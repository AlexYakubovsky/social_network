import React from "react";
import styles from "./formControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;

    return (
        <div>
            <div className={hasError && styles.error_input}>
                {props.type === 'textarea' ? <textarea {...input} {...props}/> : <input {...input} {...props}/>}
            </div>

            {hasError && <span className={styles.error_message}>{meta.error}</span>}
        </div>
    )
};