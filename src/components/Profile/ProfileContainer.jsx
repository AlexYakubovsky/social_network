import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.userId || 6733;
        this.props.setProfile(id)
    };

    render() {
        return (
            <>
                {!this.props.isAuth ? <Redirect to={'/login'}/> :
                    <Profile userProfile={this.props.userProfile}/>}
            </>
        )
    };
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        userProfile: state.profilePage.userProfile
    }
};

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(ProfileContainerWithRouter);