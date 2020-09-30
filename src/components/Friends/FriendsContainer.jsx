import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {requestUsers, follow, unfollow} from "../../redux/friendsReducer";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getDisableButton,
    getIsFetching,
    getUsersOnPage,
    getTotalCount,
    getUsers,
    getPortionSize
} from "../../reselects/friendsReselect";

class FriendsContainer extends React.Component {
    componentDidMount() {
        const {requestUsers, usersOnPage, currentPage} = this.props;

        requestUsers(usersOnPage, currentPage)
    };

    changeCurrentPage(page) {
        const {requestUsers, usersOnPage} = this.props;

        requestUsers(usersOnPage, page)
    };

    render() {
        const {users, unfollow, follow, disableButton, totalCount, usersOnPage, currentPage, portionSize} = this.props;

        return (
            <Friends changeCurrentPage={this.changeCurrentPage.bind(this)}
                     users={users}
                     unfollow={unfollow}
                     follow={follow}
                     disableButton={disableButton}
                     totalCount={totalCount}
                     usersOnPage={usersOnPage}
                     currentPage={currentPage}
                     portionSize={portionSize}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        usersOnPage: getUsersOnPage(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        disableButton: getDisableButton(state),
        portionSize: getPortionSize(state)
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {requestUsers, follow, unfollow})
)(FriendsContainer);