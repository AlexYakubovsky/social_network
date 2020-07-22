import Friends from "./Friends";
import {connect} from "react-redux";
import {followUser, setUsers, unfollowUser} from "../../redux/friendsReducer";

const mapStateToProps = state => {
    return {
        users: state.friendsPage.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setUsers: users => dispatch(setUsers(users)),
        followUser: userId => dispatch(followUser(userId)),
        unfollowUser: userId => dispatch(unfollowUser(userId))
    }
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;