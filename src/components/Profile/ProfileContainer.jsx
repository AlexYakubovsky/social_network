import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {savePhoto, setProfile, setStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
// import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUserId} from "../../reselects/authReselect";
import {getUserProfile, getUserStatus} from "../../reselects/profileReselect";

class ProfileContainer extends React.Component {
    refreshProfile() {
        const id = this.props.match.params.userId || this.props.userId || 6733;

        this.props.setProfile(id);
        this.props.setStatus(id);
    }

    componentDidMount() {
        this.refreshProfile()
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                userProfile={this.props.userProfile}
                userStatus={this.props.userStatus}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}/>
        )
    };
}

const mapStateToProps = state => ({
    userProfile: getUserProfile(state),
    userStatus: getUserStatus(state),
    userId: getUserId(state)
});

export default compose(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setProfile, setStatus, updateStatus, savePhoto})
)(ProfileContainer)