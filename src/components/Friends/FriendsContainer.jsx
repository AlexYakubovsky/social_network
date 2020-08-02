import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {followUser, setUsers, unfollowUser, setTotalCount, setCurrentPage} from "../../redux/friendsReducer";
import * as axios from "axios";

class FriendsContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    };

    changeCurrentPage(page) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(page);
            });
    };

    render() {
        return (
            <Friends changeCurrentPage={this.changeCurrentPage.bind(this)} {...this.props}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.friendsPage.users,
        totalCount: state.friendsPage.totalCount,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage
    }
};

export default connect(mapStateToProps, {
    setUsers, followUser, unfollowUser, setTotalCount, setCurrentPage
})(FriendsContainer);