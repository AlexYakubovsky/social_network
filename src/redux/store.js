const CHANGE_POST_VALUE = 'CHANGE_POST_VALUE';
const ADD_POST = 'ADD_POST';
const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'Hi', like: 1},
                {id: 2, post: 'It is my second post', like: 7},
                {id: 3, post: 'How are you?', like: 3},
                {id: 4, post: 'What do you think about my last post?:)', like: 5}
            ],
            postValue: 'What\'s new?'
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
            ],
            messageValue: 'Message...'
        }
    },

    _rerenderAllTree() {
        console.log('state was change');
    },

    getState() {
        return this._state;
    },

    subscriber(observer) {
        this._rerenderAllTree = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case CHANGE_POST_VALUE:
                this._state.profilePage.postValue = action.newPostValue;
                this._rerenderAllTree();
                break;

            case ADD_POST:
                let newPost = {
                    id: 5,
                    post: this._state.profilePage.postValue,
                    like: 0
                };

                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.postValue = '';
                this._rerenderAllTree();
                break;

            case CHANGE_MESSAGE_VALUE:
                this._state.messagesPage.messageValue = action.newMessageValue;
                this._rerenderAllTree();
                break;

            case ADD_MESSAGE:
                let newMessage = {
                    id: 5,
                    message: this._state.messagesPage.messageValue
                };

                this._state.messagesPage.dialogData.push(newMessage);
                this._state.messagesPage.messageValue = '';
                this._rerenderAllTree();
                break;

            default:
                return this._state;
        }
    }
};

export const changePostValue = newPostValue => ({type: CHANGE_POST_VALUE, newPostValue});
export const addPost = () => ({type: ADD_POST});
export const changeMessageValue = newMessageValue => ({type: CHANGE_MESSAGE_VALUE, newMessageValue});
export const addMessage = () => ({type: ADD_MESSAGE});

window.store = store;
export default store;