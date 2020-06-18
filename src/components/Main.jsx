import React from "react";
import "../App.css";
import styles from "./Main.module.css"

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_photo}>
                <img alt='user_background' src='https://image.winudf.com/v2/image/Y29tLm5pZ2h0c2t5d2FsbHBhcGVyLmhkLm5pZ2h0c2t5cGljdHVyZXMucGhvdG9zLmJhY2tncm91bmQuY3V0ZS5jb29sLmFydC5uaWdodHNreWltYWdlcy5oZC5mcmVlX3NjcmVlbl81XzE1MzMyNTAxODdfMDM4/screen-5.jpg?fakeurl=1&type=.jpg'/>
            </div>
            <div>
                ava + descrription
            </div>

            <div>
                my posts
            </div>

            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </main>
    );
};

export default Main;