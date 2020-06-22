import React from "react";
import styles from "./Messages.module.css";
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <div className={styles.messages}>
            <div className={styles.messages_users}>
                <div className={styles.messages_users__user}>
                    <NavLink to='/messages/1'>Alex</NavLink>
                </div>
                <div className={styles.messages_users__user}>
                    <NavLink to='/messages/2'>Kirill</NavLink>
                </div>
                <div className={styles.messages_users__user}>
                    <NavLink to='/messages/3'>Evgeny</NavLink>
                </div>
                <div className={styles.messages_users__user}>
                    <NavLink to='/messages/4'>Olga</NavLink>
                </div>
            </div>

            <div className={styles.messages_dialogs}>
                <div className={styles.messages_dialogs__message}>
                    hello
                </div>
                <div className={styles.messages_dialogs__message}>
                    how are you?
                </div>
                <div className={styles.messages_dialogs__message}>
                    what do think about this?
                </div>
                <div className={styles.messages_dialogs__message}>
                    are you sure?
                </div>
            </div>
        </div>
    )
};

export default Messages;