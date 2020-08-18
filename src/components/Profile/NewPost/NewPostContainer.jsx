import {addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import NewPostForm from "./NewPostForm/NewPostForm";
import React from "react";

const NewPostContainer = props => {
    let onSubmit = formData => props.addPost(formData.post);

    return (
        <NewPostForm onSubmit={onSubmit}/>
    )
};

export default connect(null, {addPost})(NewPostContainer);