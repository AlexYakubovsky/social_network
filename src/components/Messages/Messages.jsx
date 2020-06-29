import React from "react";
import styles from "./Messages.module.css";
import User from "./User/User";
import Dialog from "./Dialog/Dialog";

const Messages = props => {
    let userComponent = props.state.userData.map(v => <User id={v.id} name={v.name}/>);
    let dialogComponent = props.state.dialogData.map(v => <Dialog message={v.message}/>);

    return (
        <div className={styles.messages}>
            <div>{userComponent}</div>
            <div>{dialogComponent}</div>
        </div>
    )
};

export default Messages;