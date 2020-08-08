import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

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

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(ProfileContainerWithRouter);