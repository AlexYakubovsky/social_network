import React, {useState} from "react";

const ProfileStatus = props => {
    let [editMode, setEditMode] = useState(false);
    let [userStatus, setUserStatus] = useState(props.userStatus);

    // componentDidUpdate(prevProps) {
    //     if (prevProps.userStatus !== this.props.userStatus) {
    //         this.setState({userStatus: this.props.userStatus})
    //     }
    // }

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