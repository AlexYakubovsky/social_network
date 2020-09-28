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
    getPageSize,
    getTotalCount,
    getUsers,
    getPortionSize
} from "../../reselects/friendsReselect";

class FriendsContainer extends React.Component {
    componentDidMount() {
        const {requestUsers, pageSize, currentPage} = this.props;

        requestUsers(pageSize, currentPage)
    };

    changeCurrentPage(page) {
        const {requestUsers, pageSize} = this.props;

        requestUsers(pageSize, page)
    };

    render() {
        const {users, unfollow, follow, disableButton, totalCount, pageSize, currentPage} = this.props;

        return (
            <Friends changeCurrentPage={this.changeCurrentPage.bind(this)}
                     users={users}
                     unfollow={unfollow}
                     follow={follow}
                     disableButton={disableButton}
                     totalCount={totalCount}
                     pageSize={pageSize}
                     currentPage={currentPage}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
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