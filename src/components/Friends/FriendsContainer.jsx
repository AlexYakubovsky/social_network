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
    getUsers
} from "../../reselects/friendsReselect";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage)
    };

    changeCurrentPage(page) {
        this.props.requestUsers(this.props.pageSize, page)
    };

    render() {
        return (
            <Friends changeCurrentPage={this.changeCurrentPage.bind(this)} {...this.props}/>
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
        disableButton: getDisableButton(state)
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {requestUsers, follow, unfollow})
)(FriendsContainer);