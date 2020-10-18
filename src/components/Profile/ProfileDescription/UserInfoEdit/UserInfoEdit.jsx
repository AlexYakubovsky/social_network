import React from "react";
import UserContactsEdit from "./UserContactsEdit";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/formControls/formControls";
import styles from "../../../Login/LoginForm.module.css";

const UserInfoEdit = ({userProfile, handleSubmit, setIsEditMode, error}) => {
    const userContactsEditComponent = Object.keys(userProfile.contacts).map(v =>
        <UserContactsEdit key={v} nameSocial={v} linkSocial={userProfile.contacts[v]}/>);

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>Full name:
                    <Field name="fullName"
                           component={Textarea}
                           type='input'
                           value={userProfile.fullName || 'Enter the data'}/>
                </li>
                <li>About me:
                    <Field name="aboutMe"
                           component={Textarea}
                           type='input'
                           value={userProfile.aboutMe || 'Enter the data'}/>
                </li>
                <li>Looking for a job:
                    <Field name="lookingForAJob"
                           component={Textarea}
                           type='checkbox'/>
                </li>
                <li>My professionals skills:
                    <Field name="lookingForAJobDescription"
                           component={Textarea}
                           type='input'
                           value={userProfile.lookingForAJobDescription}/>
                </li>
            </ul>

            <div>
                <p>Contacts:</p>

                {userContactsEditComponent}
                <button onClick={() => setIsEditMode(false)}>Back</button>
                <button type='submit'>Save</button>
            </div>

            {error && error.map(v => <p className={styles.loginForm__someError}>{v}</p>)}
        </form>
    )
};

export default reduxForm({form: 'userInfoEdit'})(UserInfoEdit)