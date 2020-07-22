import React from "react";
import styles from "./Messages.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";

const Messages = props => {
    let userComponent = props.userData.map(v => <User id={v.id} name={v.name}/>);
    let dialogComponent = props.dialogData.map(v => <Dialog id={v.id} message={v.message}/>);

    let onNewMessageValue = e => {
        let messageValue = e.target.value;
        props.newMessageValue(messageValue);
    };

    let onAddNewMessage = () => props.addNewMessage();

    return (
        <div>
            <div className={styles.messages}>
                <div>{userComponent}</div>
                <div>{dialogComponent}</div>
            </div>
            <div>
                <textarea placeholder={'Message...'} value={props.messageValue} onChange={onNewMessageValue}/>
                <button onClick={onAddNewMessage}>Send message</button>
            </div>
        </div>
    )
};

export default Messages;