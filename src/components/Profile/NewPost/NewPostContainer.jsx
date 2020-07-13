import React from "react";
import {addPost, changePostValue} from "../../../redux/profileReducer";
import NewPost from "./NewPost";

const NewPostContainer = props => {
    let newPostValue = value => {
        props.dispatch(changePostValue(value));
    };

    let addNewPost = () => props.dispatch(addPost());

    return (
        <NewPost newPostValue={newPostValue} addNewPost={addNewPost} postValue={props.postValue}/>
    );
};

export default NewPostContainer;