import React from "react";
// import styles from "./NewPost.module.css"
import {addPost, changePostValue} from "../../../redux/store";

const NewPost = props => {
    const textareaElem = React.createRef();

    let newPostValue = () => {
        let newPostValue = textareaElem.current.value;
        props.dispatch(changePostValue(newPostValue));
    };

    let addNewPost = () => props.dispatch(addPost());

    return (
        <div>
            <textarea ref={textareaElem} value={props.postValue} onChange={newPostValue}/>
            <button onClick={addNewPost}>Add post</button>
        </div>
    );
};

export default NewPost;