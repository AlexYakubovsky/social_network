import React from "react";
import styles from "./Messages.module.css";

const Messages = () => {
    return (
        <div className={styles.messages}>
            <div className={styles.messages_users}>
                <div className={styles.messages_users__user}>
                    Alex
                </div>
                <div className={styles.messages_users__user}>
                    Kirill
                </div>
                <div className={styles.messages_users__user}>
                    Evgeny
                </div>
                <div className={styles.messages_users__user}>
                    Olga
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