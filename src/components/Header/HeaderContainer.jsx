import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser} from "../../redux/authReducer";
import {compose} from "redux";
import {getIsAuth, getLogin} from "../../reselects/authReselect";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
});

export default compose(
    connect(mapStateToProps, {logoutUser})
)(HeaderContainer);