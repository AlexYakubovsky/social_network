const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE';
const ADD_MESSAGE = 'ADD_MESSAGE';

    const messagesReducer = (state, action) => {
        switch (action.type) {
            case CHANGE_MESSAGE_VALUE:
                state.messageValue = action.newMessageValue;
                return state;

            case ADD_MESSAGE:
                let newMessage = {
                    id: 5,
                    message: state.messageValue
                };

                state.dialogData.push(newMessage);
                state.messageValue = '';
                return state;

            default:
                return state;
        }
};

export const changeMessageValue = newMessageValue => ({type: CHANGE_MESSAGE_VALUE, newMessageValue});
export const addMessage = () => ({type: ADD_MESSAGE});

export default messagesReducer;