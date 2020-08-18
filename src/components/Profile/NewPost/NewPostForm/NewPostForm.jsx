import React from "react";
import styles from "./NewPostForm.module.css";
import {Field, reduxForm} from "redux-form";

const NewPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.new_post}>
            <Field name='post' component='textarea' type='text' placeholder={'What\'s new?'}/>
            <button type='submit'>Add post</button>
        </form>
    );
};

export default reduxForm({form: 'post'})(NewPostForm);