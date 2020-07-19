const CHANGE_POST_VALUE = 'CHANGE_POST_VALUE';
const ADD_POST = 'ADD_POST';

const initialState = {
    postData: [
        {id: 1, post: 'Hi', like: 1},
        {id: 2, post: 'It is my second post', like: 7},
        {id: 3, post: 'How are you?', like: 3},
        {id: 4, post: 'What do you think about my last post?:)', like: 5}
    ],
    postValue: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST_VALUE:
            return {
                ...state,
                postValue: action.newPostValue
            };

        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.postValue,
                like: 0
            };

            return {
                ...state,
                postValue: '',
                postData: [...state.postData, newPost]
            };

        default:
            return state;
    }
};

export const changePostValue = newPostValue => ({type: CHANGE_POST_VALUE, newPostValue});
export const addPost = () => ({type: ADD_POST});

export default profileReducer;