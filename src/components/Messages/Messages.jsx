import React from "react";
import styles from "./Messages.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";

const Messages = () => {
    return (
        <div className={styles.messages}>
            <div>
                <User id='1' name='Alex'/>
                <User id='2' name='Kirill'/>
                <User id='3' name='Evgeny'/>
                <User id='4' name='Olga'/>
            </div>

            <div>
                <Dialog message='hello'/>
                <Dialog message='how are you?'/>
                <Dialog message='what do think about this?'/>
                <Dialog message='are you sure?'/>
            </div>
        </div>
    )
};

export default Messages;