import React from "react";
// import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = props => {
    let postComponent = props.postData.map(v => <Post key={v.id} message={v.post} like={v.like}/>);

    return (
        <div>{postComponent}</div>
    );
};

export default MyPosts;