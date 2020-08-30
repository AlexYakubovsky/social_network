import React from "react";
import styles from "../Messages.module.css";
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../../common/formControls/formControls";
import {maxLengthCreator, required} from "../../../helpers/validations/validations";

const maxLength50 = maxLengthCreator(50);
const afterSubmit = (result, dispatch) => dispatch(reset('message'));

const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.messages__new_message}>
            <Field name='message'
                   component={Textarea}
                   validate={[required, maxLength50]}
                   type='text'
                   placeholder='Message...'/>
            <button type='submit'>Send message</button>
        </form>
    )
};

export default reduxForm({form: 'message', onSubmitSuccess: afterSubmit})(MessageForm);