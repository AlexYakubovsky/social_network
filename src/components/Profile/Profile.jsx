import React from "react";
import styles from "./Profile.module.css"
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileDescription/>
            <NewPostContainer/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;