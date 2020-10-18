import React from "react";
import {Field} from "redux-form";
import {Textarea} from "../../../common/formControls/formControls";

const UserContacts = ({nameSocial, linkSocial}) => {
    return (
        <ul>
            <li>{nameSocial}:
                <Field name={`contacts[${nameSocial}]`}
                       component={Textarea}
                       type='input'
                       value={linkSocial || 'Enter the data'}/>
            </li>
        </ul>
    )
};

export default UserContacts;