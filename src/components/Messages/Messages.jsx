import React from "react";
import styles from "./Messages.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";

const Messages = props => {
    let userComponent = props.messagesPage.userData.map(v => <User id={v.id} name={v.name}/>);
    let dialogComponent = props.messagesPage.dialogData.map(v => <Dialog message={v.message}/>);

    let texareaElem = React.createRef();

    let newMessageValue = () => {
        let newMessageValue = texareaElem.current.value;
        let action = {type: 'CHANGE_MESSAGE_VALUE', newMessageValue};
        props.dispatch(action);
    };

    let addMessage = () => {
        let action = {type: 'ADD_MESSAGE'};
        props.dispatch(action);
    };

    return (
        <div>
            <div className={styles.messages}>
                <div>{userComponent}</div>
                <div>{dialogComponent}</div>
            </div>
            <div>
                <textarea ref={texareaElem} value={props.messagesPage.messageValue} onChange={newMessageValue}/>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
};

export default Messages;