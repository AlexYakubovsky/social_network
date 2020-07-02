const state = {
    profilePage: {
        postData: [
            {id: 1, post: 'Hi', like: 1},
            {id: 2, post: 'It is my second post', like: 7},
            {id: 3, post: 'How are you?', like: 3},
            {id: 4, post: 'What do you think about my last post?:)', like: 5}
        ]
    },
    messagesPage: {
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
    }
};

export let addPost = postValue => {
    let newPost = {
        id: 5,
        post: postValue,
        like: 0
    };

    state.profilePage.postData.push(newPost);
};

export default state;