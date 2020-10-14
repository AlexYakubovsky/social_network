import React from "react";
import styles from "./Post.module.css"
import userLogo from "../../../../assets/images/user-logo.png"

const Post = ({message, like}) => {
    return (
        <div className={styles.post}>
            <div className={styles.post__user_logo}>
                <img alt='user logo' src={userLogo}/>
            </div>
            <div className={styles.post_description}>
                <div>
                    {message}
                </div>
                <div className={styles.post_description__like}>
                    like - {like}
                </div>
            </div>
        </div>
    );
};

export default Post;