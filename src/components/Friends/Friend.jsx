import React from "react";
import styles from "./Friends.module.css";
import userLogo from "../../assets/images/user-logo.png"
import {NavLink} from "react-router-dom";

const Friend = ({user, unfollow, follow, disableButton}) => {
    return (
        <div key={user.id} className={styles.friends_list__item}>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img alt='' src={user.photos.small ? user.photos.small : userLogo}/>
                </NavLink>
            </div>

            <div className={styles.friends_list__user_info}>
                <div>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            {user.name}
                        </NavLink>
                    </div>

                    <div className={styles.user_info__follow}>
                        {user.followed ?
                            <button disabled={disableButton.some(id => id === user.id)}
                                    onClick={() => unfollow(user.id)}>Unfollow</button> :
                            <button disabled={disableButton.some(id => id === user.id)}
                                    onClick={() => follow(user.id)}>Follow</button>}
                    </div>
                </div>

                <div>
                    {user.status}
                </div>
            </div>
        </div>
    )
};

export default Friend;