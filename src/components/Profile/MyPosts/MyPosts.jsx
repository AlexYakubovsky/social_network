import React from "react";
// import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts

            <Post message='Hi' like='1'/>
            <Post message='It is my second post' like='7'/>
            <Post message='How are you?' like='3'/>
            <Post message='What do you think about my last post?:)' like='5'/>
        </div>
    );
};

export default MyPosts;