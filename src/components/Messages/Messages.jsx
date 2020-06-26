import React from "react";
import styles from "./Messages.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";

const userData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Kirill'},
    {id: 3, name: 'Evgeny'},
    {id: 4, name: 'Olga'},
];

const dialogData = [
    {id: 1, message: 'hello'},
    {id: 1, message: 'how are you?'},
    {id: 1, message: 'what do think about this?'},
    {id: 1, message: 'are you sure?'},
];

let user = userData.map(v => <User id={v.id} name={v.name}/>);
let dialog = dialogData.map(v => <Dialog message={v.message}/>);

const Messages = () => {
    return (
        <div className={styles.messages}>
            <div>{user}</div>
            <div>{dialog}</div>
        </div>
    )
};

export default Messages;