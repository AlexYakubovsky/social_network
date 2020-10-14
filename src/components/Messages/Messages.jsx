import React from "react";
import styles from "./Messages.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";
import MessageForm from "./MessageForm/MessageForm";

const Messages = ({userData, dialogData, addMessage}) => {
    const userComponent = userData.map(v => <User id={v.id} name={v.name}/>),
        dialogComponent = dialogData.map(v => <Dialog id={v.id} message={v.message}/>);

    const onSubmit = formData => addMessage(formData.message);

    return (
        <div className={styles.messages}>
            <div className={styles.user_container}>{userComponent}</div>

            <div className={styles.dialog_container}>
                <div>{dialogComponent}</div>

                <MessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
};

export default Messages;