import React from "react";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = props => {
    const onSubmit = formData => props.loginUser(formData.email, formData.password, formData.rememberMe);

    return (
        <>
            {props.isAuth ? <Redirect to={'/profile'}/> :
                <div>
                    <h1>Login</h1>

                    <LoginForm onSubmit={onSubmit}/>
                </div>}
        </>
    )
};

export default Login;