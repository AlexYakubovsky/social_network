import React, {useEffect, useState} from "react";

const ProfileStatus = props => {
    let [editMode, setEditMode] = useState(false);
    let [userStatus, setUserStatus] = useState(props.userStatus);

    useEffect(() => {
        setUserStatus(props.userStatus)
    }, [props.userStatus]);

    const activeEditMode = () => setEditMode(true);

    const onChangeStatus = e => setUserStatus(e.target.value);

    const deactiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(userStatus);
    };

    return (
        <div>
            {!editMode ?
                <span onClick={activeEditMode}>{userStatus || 'Enter your status'}</span> :
                <input onChange={onChangeStatus} onBlur={deactiveEditMode} value={userStatus} autoFocus={true}/>}
        </div>
    )
};

export default ProfileStatus;