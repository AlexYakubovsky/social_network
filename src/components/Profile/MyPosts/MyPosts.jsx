import React from "react";
// import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                my posts
            </div>

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;