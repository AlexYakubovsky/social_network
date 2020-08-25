import React from "react";
import styles from "./ProfileDescription.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileDescription = props => {
    return !props.userProfile ? <Preloader/> :
        <div className={styles.profile_description}>
            <ProfileStatus userStatus={props.userStatus} updateStatus={props.updateStatus}/>

            <div>
                <div>
                    <img src={props.userProfile.photos.large} alt=''/>
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