import React from "react";
import styles from "./Friends.module.css";
import * as axios from "axios";
import userLogo from "../../assets/images/user-logo.png"

class Friends extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    changeCurrentPage(page) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(page);
            });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(v => {
                        return (
                            <span key={v} onClick={() => this.changeCurrentPage(v)}
                                  className={this.props.currentPage === v && styles.active}>{v} </span>
                        )
                    })}
                </div>

                <div className={styles.friends_list}>
                    {this.props.users.map(v => {
                        return (
                            <div key={v.id} className={styles.friends_list__item}>
                                <div>
                                    <img alt='' src={v.photos.small ? v.photos.small : userLogo}/>
                                </div>

                                <div className={styles.friends_list__user_info}>
                                    <div>
                                        <div>
                                            {v.name}
                                        </div>

                                        <div className={styles.user_info__follow}>
                                            {v.followed ?
                                                <button
                                                    onClick={() => this.props.unfollowUser(v.id)}>Unfollow</button> :
                                                <button onClick={() => this.props.followUser(v.id)}>Follow</button>}
                                        </div>
                                    </div>

                                    <div>
                                        {v.status}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Friends;