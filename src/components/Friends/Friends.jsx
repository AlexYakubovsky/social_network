import React from "react";
import styles from "./Friends.module.css";
import userLogo from "../../assets/images/user-logo.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Friends = props => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(v => {
                    return (
                        <span key={v} onClick={() => props.changeCurrentPage(v)}
                              className={props.currentPage === v && styles.active}>{v} </span>
                    )
                })}
            </div>

            <div className={styles.friends_list}>
                {props.users.map(v => {
                    return (
                        <div key={v.id} className={styles.friends_list__item}>
                            <div>
                                <NavLink to={`/profile/${v.id}`}>
                                    <img alt='' src={v.photos.small ? v.photos.small : userLogo}/>
                                </NavLink>
                            </div>

                            <div className={styles.friends_list__user_info}>
                                <div>
                                    <div>
                                        <NavLink to={`/profile/${v.id}`}>
                                            {v.name}
                                        </NavLink>
                                    </div>

                                    <div className={styles.user_info__follow}>
                                        {v.followed ?
                                            <button disabled={props.isDisableButton.some(id => id === v.id)} onClick={() => {
                                                props.toggleIsDisableButton(true, v.id);
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${v.id}`,
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "71e5da94-7843-4823-b8ed-9a2fc4fe9a74"
                                                        }
                                                    }).then(response => {
                                                    response.data.resultCode === 0 && props.unfollowUser(v.id) && props.toggleIsDisableButton(false, v.id)
                                                });
                                            }}>Unfollow</button> :
                                            <button disabled={props.isDisableButton.some(id => id === v.id)} onClick={() => {
                                                props.toggleIsDisableButton(true, v.id);
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${v.id}`, {},
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "71e5da94-7843-4823-b8ed-9a2fc4fe9a74"
                                                        }
                                                    }).then(response => {
                                                    response.data.resultCode === 0 && props.followUser(v.id) && props.toggleIsDisableButton(false, v.id)
                                                });
                                            }}>Follow</button>}
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
};

export default Friends;