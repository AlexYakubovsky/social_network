import React from "react";
import styles from "./Profile.module.css"
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileDescription/>
            <NewPost/>
            <MyPosts/>
        </div>
    );
};

export default Profile;