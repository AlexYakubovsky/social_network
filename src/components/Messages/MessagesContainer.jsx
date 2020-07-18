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

const mapDispatchToProps = dispatch => {
    return {
        newMessageValue: value => dispatch(changeMessageValue(value)),
        addNewMessage: () => dispatch(addMessage())
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;