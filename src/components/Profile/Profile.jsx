import React from "react";
import styles from "./Profile.module.css"
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = () => {
    return (
        <main className={styles.profile}>
            <ProfileDescription/>
            <NewPost/>
            <MyPosts/>
        </main>
    );
};

export default Profile;