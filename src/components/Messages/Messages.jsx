import React from "react";
import styles from "./Messages.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";

const Messages = props => {
    let userComponent = props.userData.map(v => <User id={v.id} name={v.name}/>);
    let dialogComponent = props.dialogData.map(v => <Dialog id={v.id} message={v.message}/>);

    let onChangeMessageValue = e => {
        let messageValue = e.target.value;
        props.changeMessageValue(messageValue);
    };

    let onAddMessage = () => props.addMessage();

    return (
        <div className={styles.messages}>
            <div className={styles.user_container}>{userComponent}</div>

            <div className={styles.dialog_container}>
                <div>
                    {dialogComponent}
                </div>

                <div className={styles.messages__new_message}>
                    <textarea placeholder={'Message...'} value={props.messageValue} onChange={onChangeMessageValue}/>
                    <button onClick={onAddMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Messages;