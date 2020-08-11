import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.userId || 6733;
        this.props.setProfile(id)
    };

    render() {
        return (
            <Profile userProfile={this.props.userProfile}/>
        )
    };
}

const mapStateToProps = state => ({userProfile: state.profilePage.userProfile});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setProfile})
)(ProfileContainer)