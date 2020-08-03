import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        postData: state.profilePage.postData
    }
};

export default connect(mapStateToProps, null)(MyPosts);