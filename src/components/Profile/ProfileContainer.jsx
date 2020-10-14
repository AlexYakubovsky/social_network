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
        const {userId, setProfile, setStatus} = this.props;
        const id = this.props.match.params.userId || userId || 6733;

        setProfile(id);
        setStatus(id);
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
        const {userProfile, userStatus, updateStatus, savePhoto} = this.props;

        return (
            <Profile
                userProfile={userProfile}
                userStatus={userStatus}
                updateStatus={updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={savePhoto}/>
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