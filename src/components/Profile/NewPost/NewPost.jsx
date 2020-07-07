import React from "react";
// import styles from "./NewPost.module.css"

const NewPost = props => {
    const textareaElem = React.createRef();

    let newPostValue = () => {
        let newPostValue = textareaElem.current.value;
        let action = {type: 'CHANGE_POST_VALUE', newPostValue};
        props.dispatch(action);
    };

    let addPost = () => {
        let action = {type: 'ADD_POST'};
        props.dispatch(action)
    };

    return (
        <div>
            <textarea ref={textareaElem} value={props.postValue} onChange={newPostValue}/>
            <button onClick={addPost}>Add post</button>
        </div>
    );
};

export default NewPost;