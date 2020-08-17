import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='login' component='input' type='text' placeholder='Login'/>
            </div>
            <div>
                <Field name="password" component='input' type='text' placeholder='Password'/>
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
};

export default reduxForm({form: 'login'})(LoginForm)