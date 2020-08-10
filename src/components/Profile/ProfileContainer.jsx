import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";

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

const mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile
    }
};

const withAuthRedirectComponent = withAuthRedirect(ProfileContainer);
const ProfileContainerWithRouter = withRouter(withAuthRedirectComponent);

export default connect(mapStateToProps, {setProfile})(ProfileContainerWithRouter);