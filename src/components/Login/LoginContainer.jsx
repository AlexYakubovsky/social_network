import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {loginUser} from "../../redux/authReducer";

const LoginContainer = props => {
    return (
        <Login {...props}/>
    )
};

const mapStateToProps = state => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {loginUser})(LoginContainer);