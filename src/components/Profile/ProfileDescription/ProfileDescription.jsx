import React, {useState} from "react";
import styles from "./ProfileDescription.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userLogo from "../../../assets/images/user-logo.png"
import UserInfo from "./UserInfo/UserInfo";
import UserInfoEdit from "./UserInfoEdit/UserInfoEdit";

const ProfileDescription = ({savePhoto, userProfile, isOwner, saveProfile, ...props}) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const onSavePhoto = e => e.target.files.length && savePhoto(e.target.files[0]);
    const onSubmit = formData => {
        saveProfile(formData);
            setIsEditMode(false);
    };

    return (
        <div className={styles.profile_description}>
            <ProfileStatus {...props}/>

            <div>
                <img src={userProfile.photos.large || userLogo} alt=''/>
                {isOwner && <input type={'file'} onChange={onSavePhoto}/>}
            </div>

            {!isEditMode ? <UserInfo userProfile={userProfile} isOwner={isOwner} setIsEditMode={setIsEditMode}/> :
                <UserInfoEdit userProfile={userProfile} initialValues={userProfile}  setIsEditMode={setIsEditMode} onSubmit={onSubmit}/>}
        </div>
    )
};

export default ProfileDescription;