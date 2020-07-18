const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
    dialogData: [
        {id: 1, message: 'hello'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'what do think about this?'},
        {id: 4, message: 'are you sure?'},
    ],
    userData: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Evgeny'},
        {id: 4, name: 'Olga'},
    ],
    messageValue: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_VALUE:
            return {
                ...state,
                messageValue: action.newMessageValue
            };

        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.messageValue
            };

            state.messageValue = '';

            return {
                ...state,
                dialogData: [...state.dialogData, newMessage],
                userData: [...state.userData]
            };

        default:
            return state;
    }
};

export const changeMessageValue = newMessageValue => ({type: CHANGE_MESSAGE_VALUE, newMessageValue});
export const addMessage = () => ({type: ADD_MESSAGE});

export default messagesReducer;