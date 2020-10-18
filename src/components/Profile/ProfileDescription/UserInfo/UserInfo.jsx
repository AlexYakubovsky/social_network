import React from "react";
import UserContacts from "./UserContacts";

const UserInfo = ({userProfile, isOwner, setIsEditMode}) => {
    const userContactsComponent = Object.keys(userProfile.contacts).map(v =>
        <UserContacts key={v} nameSocial={v} linkSocial={userProfile.contacts[v]}/>);

    return (
        <div>
            <ul>
                <li>{userProfile.fullName}</li>
                <li>About me: {userProfile.aboutMe}</li>
                <li>Looking for a job: {userProfile.lookingForAJob ? 'yes' : 'no'}</li>
                {userProfile.lookingForAJob &&
                <li>My professionals skills: {userProfile.lookingForAJobDescription}</li>}
            </ul>

            <div>
                <p>Contacts:</p>

                {userContactsComponent}
                {isOwner && <button onClick={() => setIsEditMode(true)}>Change</button>}
            </div>
        </div>
    )
};

export default UserInfo;