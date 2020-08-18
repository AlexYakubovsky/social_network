import React from "react";
import styles from "../Messages.module.css";
import {Field, reduxForm} from "redux-form";

const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.messages__new_message}>
            <Field name='message' component='textarea' type='text' placeholder='Message...'/>
            <button type='submit'>Send message</button>
        </form>
    )
};

export default reduxForm({form: 'message'})(MessageForm);