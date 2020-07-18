import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        postData: state.profilePage.postData
    }
};

const MyPostsContainer = connect(mapStateToProps, null)(MyPosts);

export default MyPostsContainer;