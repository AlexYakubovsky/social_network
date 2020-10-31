const ADD_MESSAGE = 'messagePage/ADD_MESSAGE';

const initialState = {
    dialogData: [
        {id: 0, message: 'hello'},
        {id: 1, message: 'how are you?'},
        {id: 2, message: 'what do think about this?'},
        {id: 3, message: 'are you sure?'},
    ],
    userData: [
        {id: 0, name: 'Alex'},
        {id: 1, name: 'Kirill'},
        {id: 2, name: 'Evgeny'},
        {id: 3, name: 'Olga'},
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: state.dialogData.length,
                message: action.message
            };

            return {...state, dialogData: [...state.dialogData, newMessage]};

        default:
            return state;
    }
};

export const addMessage = message => ({type: ADD_MESSAGE, message});

export default messagesReducer;