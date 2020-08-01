import React from "react";
import styles from "./ProfileDescription.module.css"

const ProfileDescription = () => {
    return (
        <div className={styles.profile_description}>
            <div className={styles.profile_description__background_photo}>
                <img alt='user_background'
                     src='https://image.winudf.com/v2/image/Y29tLm5pZ2h0c2t5d2FsbHBhcGVyLmhkLm5pZ2h0c2t5cGljdHVyZXMucGhvdG9zLmJhY2tncm91bmQuY3V0ZS5jb29sLmFydC5uaWdodHNreWltYWdlcy5oZC5mcmVlX3NjcmVlbl81XzE1MzMyNTAxODdfMDM4/screen-5.jpg?fakeurl=1&type=.jpg'/>
            </div>
        </div>
    );
};

export default ProfileDescription;