import React from "react";
import styles from "./Profile.module.css"
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = props => {
    return (
        <div className={styles.profile}>
            <ProfileDescription/>
            <NewPost addPost={props.addPost}/>
            <MyPosts postData={props.state}/>
        </div>
    );
};

export default Profile;