import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPostData} from "../../../reselects/profileReselect";

const mapStateToProps = state => {
    return {
        postData: getPostData(state)
    }
};

export default connect(mapStateToProps, null)(MyPosts);