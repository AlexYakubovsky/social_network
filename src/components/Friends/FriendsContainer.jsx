import Friends from "./Friends";
import {connect} from "react-redux";
import {followUser, setUsers, unfollowUser, setTotalCount, setCurrentPage} from "../../redux/friendsReducer";

const mapStateToProps = state => {
    return {
        users: state.friendsPage.users,
        totalCount: state.friendsPage.totalCount,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage
    }
};

const FriendsContainer = connect(mapStateToProps, {
    setUsers, followUser, unfollowUser, setTotalCount, setCurrentPage
})(Friends);

export default FriendsContainer;