import Messages from "./Messages";
import {addMessage} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUserData, getDialogData} from "../../reselects/messagesReselect";

const mapStateToProps = state => ({
    userData: getUserData(state),
    dialogData: getDialogData(state)
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage})
)(Messages)