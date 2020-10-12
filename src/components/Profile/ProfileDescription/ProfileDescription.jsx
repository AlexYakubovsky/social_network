import React from "react";
import styles from "./ProfileDescription.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userLogo from "../../../assets/images/user-logo.png"

const ProfileDescription = props => {
    const onSavePhoto = e => e.target.files.length && props.savePhoto(e.target.files[0]);

    return !props.userProfile ? <Preloader/> :
        <div className={styles.profile_description}>
            <ProfileStatus userStatus={props.userStatus} updateStatus={props.updateStatus}/>

            <div>
                <div>
                    <img src={props.userProfile.photos.large || userLogo} alt=''/>
                    {props.isOwner && <input type={'file'} onChange={onSavePhoto}/>}
                </div>
                <div>
                    {props.userProfile.aboutMe}
                </div>
                <div>
                    {props.userProfile.fullName}
                </div>
            </div>
        </div>
};

export default ProfileDescription;