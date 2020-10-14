import React from "react";
import styles from "./ProfileDescription.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userLogo from "../../../assets/images/user-logo.png"

const ProfileDescription = ({savePhoto, userProfile, userStatus, updateStatus, isOwner}) => {
    const onSavePhoto = e => e.target.files.length && savePhoto(e.target.files[0]);

    return !userProfile ? <Preloader/> :
        <div className={styles.profile_description}>
            <ProfileStatus userStatus={userStatus} updateStatus={updateStatus}/>

            <div>
                <div>
                    <img src={userProfile.photos.large || userLogo} alt=''/>
                    {isOwner && <input type={'file'} onChange={onSavePhoto}/>}
                </div>
                <div>
                    {userProfile.aboutMe}
                </div>
                <div>
                    {userProfile.fullName}
                </div>
            </div>
        </div>
};

export default ProfileDescription;