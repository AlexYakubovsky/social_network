import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../common/formControls/formControls";
import {required} from "../../helpers/validations/validations";
import styles from "./LoginForm.module.css"

const afterSubmit = (result, dispatch) => dispatch(reset('login'));

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='email'
                   component={Textarea}
                   type='input'
                   validate={[required]}
                   placeholder='Email'/>

            <Field name="password"
                   component={Textarea}
                   type='password'
                   validate={[required]}
                   placeholder='Password'/>

            <Field name='rememberMe'
                   component='input'
                   type='checkbox'/>
                   Remember me

            {props.error && <p className={styles.loginForm__someError}>{props.error}</p>}

            <button type='submit'>Send</button>
        </form>
    )
};

export default reduxForm({form: 'login', onSubmitSuccess: afterSubmit})(LoginForm)