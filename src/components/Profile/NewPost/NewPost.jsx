import React from "react";
// import styles from "./NewPost.module.css"
import {addPost, changePostValue} from "../../../redux/profileReducer";

const NewPost = props => {
    let newPostValue = e => {
        let newPostValue = e.target.value;
        props.dispatch(changePostValue(newPostValue));
    };

    let addNewPost = () => props.dispatch(addPost());

    return (
        <div>
            <textarea placeholder={'What\'s new?'} value={props.postValue} onChange={newPostValue}/>
            <button onClick={addNewPost}>Add post</button>
        </div>
    );
};

export default NewPost;