import React from "react";
import styles from "./Messages.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";
import {addMessage, changeMessageValue} from "../../redux/messagesReducer";

const Messages = props => {
    let userComponent = props.messagesPage.userData.map(v => <User id={v.id} name={v.name}/>);
    let dialogComponent = props.messagesPage.dialogData.map(v => <Dialog message={v.message}/>);

    let newMessageValue = (e) => {
        let newMessageValue = e.target.value;
        props.dispatch(changeMessageValue(newMessageValue));
    };

    let addNewMessage = () => props.dispatch(addMessage());

    return (
        <div>
            <div className={styles.messages}>
                <div>{userComponent}</div>
                <div>{dialogComponent}</div>
            </div>
            <div>
                <textarea placeholder={'Message...'} value={props.messagesPage.messageValue} onChange={newMessageValue}/>
                <button onClick={addNewMessage}>Send message</button>
            </div>
        </div>
    )
};

export default Messages;