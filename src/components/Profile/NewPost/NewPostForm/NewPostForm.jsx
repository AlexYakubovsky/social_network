import React from "react";
import styles from "./NewPostForm.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../helpers/validations/validations";
import {Textarea} from "../../../common/formControls/formControls";

const maxLength10 = maxLengthCreator(10);

const NewPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.new_post}>
            <Field name='post'
                   component={Textarea}
                   validate={[required, maxLength10]}
                   type={'text'}
                   placeholder={'What\'s new?'}/>
            <button type='submit'>Add post</button>
        </form>
    );
};

export default reduxForm({form: 'post'})(NewPostForm);