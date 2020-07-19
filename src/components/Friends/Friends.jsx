import React from "react";
import styles from "./Friends.module.css";

const Friends = props => {
    return (
        <div>
            {props.users.map(v => {
                return (
                    <div className={styles.friends}>
                        <img alt='' src={v.photo}/>
                        <div>
                            <div>
                                {v.firstName}
                            </div>
                            <div>
                                {v.lastName}
                            </div>
                            <div>
                                {v.age}
                            </div>
                        </div>
                        <div>
                            {v.location}
                        </div>
                        <div>
                            {v.isFollow ? <button onClick={() => props.unfollowUser(v.id)}>Unfollow</button> :
                                <button onClick={() => props.followUser(v.id)}>Follow</button>}
                        </div>
                    </div>

                )
            })}
        </div>
    )
};

export default Friends;