import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {getUsers, follow, unfollow} from "../../redux/friendsReducer";
import Preloader from "../common/Preloader/Preloader";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    };

    changeCurrentPage(page) {
        this.props.getUsers(this.props.pageSize, page)
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Friends changeCurrentPage={this.changeCurrentPage.bind(this)} {...this.props}/>}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.friendsPage.users,
        totalCount: state.friendsPage.totalCount,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        isDisableButton: state.friendsPage.isDisableButton
    }
};

export default connect(mapStateToProps, {
    getUsers, follow, unfollow
})(FriendsContainer);