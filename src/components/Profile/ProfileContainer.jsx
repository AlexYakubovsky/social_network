import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
// import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.userId || 6733;
        this.props.setProfile(id);
        this.props.setStatus(id);
    };

    render() {
        return (
            <Profile
                userProfile={this.props.userProfile}
                userStatus={this.props.userStatus}
                updateStatus={this.props.updateStatus}/>
        )
    };
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus
});

export default compose(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setProfile, setStatus, updateStatus})
)(ProfileContainer)