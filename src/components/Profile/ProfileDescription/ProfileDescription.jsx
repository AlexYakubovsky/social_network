import React from "react";
import styles from "./ProfileDescription.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileDescription = props => {
    return (
        <>
            {!props.userProfile ? <Preloader/> :
                <div className={styles.profile_description}>
                    <div className={styles.profile_description__background_photo}>
                        {/*<img alt='user_background'*/}
                        {/*     src='https://image.winudf.com/v2/image/Y29tLm5pZ2h0c2t5d2FsbHBhcGVyLmhkLm5pZ2h0c2t5cGljdHVyZXMucGhvdG9zLmJhY2tncm91bmQuY3V0ZS5jb29sLmFydC5uaWdodHNreWltYWdlcy5oZC5mcmVlX3NjcmVlbl81XzE1MzMyNTAxODdfMDM4/screen-5.jpg?fakeurl=1&type=.jpg'/>*/}
                    <ProfileStatus status={'Hello. Click to me'}/>
                    </div>

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
                </div>}
        </>
    )
};

export default ProfileDescription;