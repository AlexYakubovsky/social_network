import {profileAPI} from "../api/api";

const ADD_POST = 'profilePage/ADD_POST';
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE';
const SET_USER_STATUS = 'profilePage/SET_USER_STATUS';
const DELETE_POST = 'profilePage/DELETE_POST';

const initialState = {
    postData: [
        {id: 1, post: 'Hi', like: 1},
        {id: 2, post: 'It is my second post', like: 7},
        {id: 3, post: 'How are you?', like: 3},
        {id: 4, post: 'What do you think about my last post?:)', like: 5}
    ],
    userProfile: null,
    userStatus: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                post: action.post,
                like: 0
            };

            return {...state, postData: [...state.postData, newPost]};

        case SET_USER_PROFILE:
            return {...state, userProfile: {...action.userProfile}};

        case SET_USER_STATUS:
            return {...state, userStatus: action.userStatus};

        case DELETE_POST:
            return {...state, postData: state.postData.filter(v => v.id !== action.postId)};

        default:
            return state;
    }
};

export const addPost = post => ({type: ADD_POST, post});
export const setUserProfile = userProfile => ({type: SET_USER_PROFILE, userProfile});
export const setUserStatus = userStatus => ({type: SET_USER_STATUS, userStatus});
export const deletePost = postId => ({type: DELETE_POST, postId});

export const setProfile = id => async dispatch => {
    const data = await profileAPI.getProfile(id);

    dispatch(setUserProfile(data));
};

export const setStatus = id => async dispatch => {
    const data = await profileAPI.getStatus(id);

    dispatch(setUserStatus(data));
};

export const updateStatus = status => async dispatch => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export default profileReducer;