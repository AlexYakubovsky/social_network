import React from "react";
import styles from "./Profile.module.css"
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
    return (
        <div className={styles.profile}>
            <ProfileDescription {...props}/>
            <NewPostContainer/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;