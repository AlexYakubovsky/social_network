import React from "react";
import styles from "./Post.module.css"
import userLogo from "../../../../user-logo.png"

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.post__user_logo}>
                <img alt='user logo' src={userLogo}/>
            </div>
            <div className={styles.post_description}>
                <div>
                    post 1
                </div>
                <div className={styles.post_description__like}>
                    like
                </div>
            </div>
        </div>
    );
};

export default Post;