import {friendsAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_DISABLE_BUTTON = 'TOGGLE_IS_DISABLE_BUTTON';

const initialState = {
    users: [],
    totalCount: null,
    currentPage: 1,
    pageSize: 50,
    isFetching: false,
    disableButton: []
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};

        case FOLLOW_USER:
            return {...state, users: state.users.map(v => v.id === action.userId ? {...v, followed: true} : v)};

        case UNFOLLOW_USER:
            return {...state, users: state.users.map(v => v.id === action.userId ? {...v, followed: false} : v)};

        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_DISABLE_BUTTON:
            return {
                ...state,
                disableButton: action.disableButton ?
                    [...state.disableButton, action.userId] :
                    state.disableButton.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};

export const setUsers = users => ({type: SET_USERS, users});
export const followUser = userId => ({type: FOLLOW_USER, userId});
export const unfollowUser = userId => ({type: UNFOLLOW_USER, userId});
export const setTotalCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleDisableButton = (disableButton, userId) => ({
    type: TOGGLE_IS_DISABLE_BUTTON,
    disableButton, userId
});

export const getUsers = (pageSize, currentPage) => dispatch => {
    dispatch(toggleIsFetching(true));
    friendsAPI.getUsers(pageSize, currentPage).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false));
    });
};
export const follow = id => dispatch => {
    dispatch(toggleDisableButton(true, id));
    friendsAPI.follow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(followUser(id));
            dispatch(toggleDisableButton(false, id))
        }
    });
};
export const unfollow = id => dispatch => {
    dispatch(toggleDisableButton(true, id));
    friendsAPI.unfollow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowUser(id));
            dispatch(toggleDisableButton(false, id))
        }
    });
};

export default friendsReducer;