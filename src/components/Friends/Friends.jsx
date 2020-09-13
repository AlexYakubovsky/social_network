import React from "react";
import styles from "./Friends.module.css";
import Pagination from "../common/Pagination/Pagination";
import Friend from "./Friend";

const Friends = ({users, unfollow, follow, disableButton, ...props}) => {
    const friendComponent = users.map(v => <Friend key={v.id} user={v} unfollow={unfollow} follow={follow}
                                                   disableButton={disableButton}/>);

    return (
        <div>
            <Pagination {...props}/>

            <div className={styles.friends_list}>
                {friendComponent}
            </div>
        </div>
    )
};

export default Friends;