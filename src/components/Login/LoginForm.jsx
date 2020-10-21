import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../common/formControls/formControls";
import {required} from "../../helpers/validations/validations";
import styles from "./LoginForm.module.css"

const afterSubmit = (result, dispatch) => dispatch(reset('login'));

const LoginForm = ({handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={handleSubmit}>
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

            {captcha && <img src={captcha} alt=''/>}
            {captcha &&
            <Field name="captcha"
                   component={Textarea}
                   type='input'
                   validate={[required]}
                   placeholder='Captcha'/>}
            {error && <p className={styles.loginForm__someError}>{error}</p>}

            <button type='submit'>Send</button>
        </form>
    )
};

export default reduxForm({form: 'login', onSubmitSuccess: afterSubmit})(LoginForm)