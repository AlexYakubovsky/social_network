import React from "react";
import styles from "./Profile.module.css"
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = props => {
    return (
        <div className={styles.profile}>
            <ProfileDescription/>
            <NewPostContainer postValue={props.profilePage.postValue}
                     dispatch={props.dispatch}/>
            <MyPosts postData={props.profilePage.postData}/>
        </div>
    );
};

export default Profile;