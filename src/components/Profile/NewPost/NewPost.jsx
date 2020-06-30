import React from "react";
// import styles from "./NewPost.module.css"

const NewPost = () => {
    let textareaElem = React.createRef();

    let addPost = () => {
        let newPostText = textareaElem.current.value;
        alert(newPostText);
    };

    return (
        <div>
            <textarea ref={textareaElem}/>
            <button onClick={addPost}>Add post</button>
        </div>
    );
};

export default NewPost;