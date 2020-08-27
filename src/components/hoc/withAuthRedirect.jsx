import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuth} from "../../reselects/authReselect";

const mapStateToProps = state => ({isAuth: getIsAuth(state)});

const withAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        render() {
            return !this.props.isAuth ? <Redirect to={'/login'}/> : <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
};

export default withAuthRedirect;