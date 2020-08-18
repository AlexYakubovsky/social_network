import Messages from "./Messages";
import {addMessage} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        userData: state.messagesPage.userData,
        dialogData: state.messagesPage.dialogData
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage})
)(Messages)