import React, {useEffect, useState} from "react";

const ProfileStatus = props => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userStatus, setUserStatus] = useState(props.userStatus);

    useEffect(() => {
        setUserStatus(props.userStatus)
    }, [props.userStatus]);

    const activeEditMode = () => setIsEditMode(true);

    const onChangeStatus = e => setUserStatus(e.target.value);

    const deactiveEditMode = () => {
        setIsEditMode(false);
        props.updateStatus(userStatus);
    };

    return (
        <div>
            {!isEditMode ?
                <span onClick={activeEditMode}>{userStatus || 'Enter your status'}</span> :
                <input onChange={onChangeStatus} onBlur={deactiveEditMode} value={userStatus} autoFocus={true}/>}
        </div>
    )
};

export default ProfileStatus;