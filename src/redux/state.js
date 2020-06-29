const state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi', like: 1},
            {id: 2, message: 'It is my second post', like: 7},
            {id: 3, message: 'How are you?', like: 3},
            {id: 4, message: 'What do you think about my last post?:)', like: 5}
        ]
    },
    messagesPage: {
        dialogData: [
            {id: 1, message: 'hello'},
            {id: 1, message: 'how are you?'},
            {id: 1, message: 'what do think about this?'},
            {id: 1, message: 'are you sure?'},
        ],
        userData: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Kirill'},
            {id: 3, name: 'Evgeny'},
            {id: 4, name: 'Olga'},
        ]
    }
};

export default state;