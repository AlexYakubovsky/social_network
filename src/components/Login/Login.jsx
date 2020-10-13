import React from "react";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = ({loginUser, isAuth}) => {
    const onSubmit = formData => loginUser(formData.email, formData.password, formData.rememberMe);

    return isAuth ? <Redirect to={'/profile'}/> :
        <div>
            <h1>Login</h1>

            <LoginForm onSubmit={onSubmit}/>
        </div>
};

export default Login;