import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {
    followUser, setUsers, unfollowUser, setTotalCount, setCurrentPage, toggleIsFetching
} from "../../redux/friendsReducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    };

    changeCurrentPage(page) {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(page);
                this.props.toggleIsFetching(false);
            });
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
        isFetching: state.friendsPage.isFetching
    }
};

export default connect(mapStateToProps, {
    setUsers, followUser, unfollowUser, setTotalCount, setCurrentPage, toggleIsFetching
})(FriendsContainer);