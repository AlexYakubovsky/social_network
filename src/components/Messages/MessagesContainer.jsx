import Messages from "./Messages";
import {addMessage, changeMessageValue} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const mapStateToProps = state => {
    return {
        userData: state.messagesPage.userData,
        dialogData: state.messagesPage.dialogData,
        messageValue: state.messagesPage.messageValue
    }
};

const withAuthRedirectComponent = withAuthRedirect(Messages);

export default connect(mapStateToProps, {changeMessageValue, addMessage})(withAuthRedirectComponent);