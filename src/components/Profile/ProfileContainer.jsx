import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 6733;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter);