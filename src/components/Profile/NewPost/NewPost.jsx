import React from "react";
import styles from "./NewPost.module.css";

const NewPost = props => {
    let onChangePostValue = e => {
        let newPostValue = e.target.value;
        props.changePostValue(newPostValue);
    };

    let onAddPost = () => props.addPost();

    return (
        <div className={styles.new_post}>
            <textarea placeholder={'What\'s new?'} value={props.postValue} onChange={onChangePostValue}/>
            <button onClick={onAddPost}>Add post</button>
        </div>
    );
};

export default NewPost;