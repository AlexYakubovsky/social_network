import {addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import NewPostForm from "./NewPostForm/NewPostForm";
import React from "react";

const NewPostContainer = ({addPost}) => {
    let onSubmit = formData => addPost(formData.post);

    return (
        <NewPostForm onSubmit={onSubmit}/>
    )
};

export default connect(null, {addPost})(NewPostContainer);