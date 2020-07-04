import React from "react";
// import styles from "./NewPost.module.css"

const NewPost = props => {
    const textareaElem = React.createRef();

    let newPostValue = () => {
        let newPostValue = textareaElem.current.value;
        props.changePostValue(newPostValue);
    };

    return (
        <div>
            <textarea ref={textareaElem} value={props.postValue} onChange={newPostValue}/>
            <button onClick={props.addPost}>Add post</button>
        </div>
    );
};

export default NewPost;