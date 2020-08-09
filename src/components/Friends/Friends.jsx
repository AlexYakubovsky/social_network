import React from "react";
import styles from "./Friends.module.css";
import userLogo from "../../assets/images/user-logo.png"
import {NavLink, Redirect} from "react-router-dom";

const Friends = props => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            {!props.isAuth ? <Redirect to={'/login'}/> :
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
                                                    <button disabled={props.isDisableButton.some(id => id === v.id)}
                                                            onClick={() => props.unfollow(v.id)}>Unfollow</button> :
                                                    <button disabled={props.isDisableButton.some(id => id === v.id)}
                                                            onClick={() => props.follow(v.id)}>Follow</button>}
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
            }
        </>
    )
};

export default Friends;