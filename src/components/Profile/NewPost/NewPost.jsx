import React from "react";
// import styles from "./NewPost.module.css"

const NewPost = props => {
    let onChangePostValue = e => {
        let newPostValue = e.target.value;
        props.newPostValue(newPostValue);
    };

    let onAddNewPost = () => props.addNewPost();

    return (
        <div>
            <textarea placeholder={'What\'s new?'} value={props.postValue} onChange={onChangePostValue}/>
            <button onClick={onAddNewPost}>Add post</button>
        </div>
    );
};

export default NewPost;