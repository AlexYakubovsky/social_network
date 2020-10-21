import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {loginUser} from "../../redux/authReducer";
import {getCaptcha, getIsAuth} from "../../reselects/authReselect";

const LoginContainer = props => {
    return (
        <Login {...props}/>
    )
};

const mapStateToProps = state => ({isAuth: getIsAuth(state), captcha: getCaptcha(state)});

export default connect(mapStateToProps, {loginUser})(LoginContainer);