import {addPost, changePostValue} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        postValue: state.profilePage.postValue
    }
};

export default connect(mapStateToProps, {changePostValue, addPost})(NewPost);