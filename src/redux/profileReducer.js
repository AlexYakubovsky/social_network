const CHANGE_POST_VALUE = 'CHANGE_POST_VALUE';
const ADD_POST = 'ADD_POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_POST_VALUE:
            state.postValue = action.newPostValue;
            return state;

        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.postValue,
                like: 0
            };

            state.postData.push(newPost);
            state.postValue = '';
            return state;

        default:
            return state;
    }
};

export const changePostValue = newPostValue => ({type: CHANGE_POST_VALUE, newPostValue});
export const addPost = () => ({type: ADD_POST});

export default profileReducer;