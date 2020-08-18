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
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.message
            };

            return {...state, dialogData: [...state.dialogData, newMessage]};

        default:
            return state;
    }
};

export const addMessage = message => ({type: ADD_MESSAGE, message});

export default messagesReducer;