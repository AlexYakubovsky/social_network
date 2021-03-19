import React from "react"
import styles from "./formControls.module.css"

export const Textarea = ({input, meta: {error, touched}, ...props}) => {
    const hasError = error && touched

    return (
        <div>
            <div className={hasError ? styles.error_input : ''}>
                {props.type === 'textarea' ? <textarea {...input} {...props}/> : <input {...input} {...props}/>}
            </div>

            {hasError && <span className={styles.error_message}>{error}</span>}
        </div>
    )
}