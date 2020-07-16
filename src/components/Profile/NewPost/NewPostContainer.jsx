import React from "react";
import {addPost, changePostValue} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        postValue: state.profilePage.postValue
    }
};

const mapDispatchToProps = dispatch => {
    return {
        newPostValue: value => dispatch(changePostValue(value)),
        addNewPost: () => dispatch(addPost())
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;