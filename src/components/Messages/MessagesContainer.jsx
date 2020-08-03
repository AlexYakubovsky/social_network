import Messages from "./Messages";
import {addMessage, changeMessageValue} from "../../redux/messagesReducer";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        userData: state.messagesPage.userData,
        dialogData: state.messagesPage.dialogData,
        messageValue: state.messagesPage.messageValue
    }
};

export default connect(mapStateToProps, {changeMessageValue, addMessage})(Messages);