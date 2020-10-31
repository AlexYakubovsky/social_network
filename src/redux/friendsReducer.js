import {friendsAPI} from "../api/api";
import {showError} from "./appReducer";

const SET_USERS = 'friendsPage/SET_USERS';
const FOLLOW_USER = 'friendsPage/FOLLOW_USER';
const UNFOLLOW_USER = 'friendsPage/UNFOLLOW_USER';
const SET_TOTAL_COUNT = 'friendsPage/SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'friendsPage/SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'friendsPage/TOGGLE_IS_FETCHING';
const TOGGLE_IS_DISABLE_BUTTON = 'friendsPage/TOGGLE_IS_DISABLE_BUTTON';

const initialState = {
    users: [],
    totalCount: null,
    currentPage: 1,
    usersOnPage: 50,
    isFetching: false,
    disableButton: [],
    portionSize: 10
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
export const toggleDisableButton = (disableButton, userId) => ({type: TOGGLE_IS_DISABLE_BUTTON, disableButton, userId});

export const requestUsers = (usersOnPage, currentPage) => async dispatch => {
    try {
        dispatch(toggleIsFetching(true));
        const data = await friendsAPI.getUsers(usersOnPage, currentPage);

        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false));
    } catch (error) {
        dispatch(showError(error))
    }
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    try {
        dispatch(toggleDisableButton(true, id));
        const data = await apiMethod(id);

        if (data.resultCode === 0) {
            dispatch(actionCreator(id));
            dispatch(toggleDisableButton(false, id))
        }
    } catch (error) {
        dispatch(showError(error))
    }
};

export const follow = id => dispatch => followUnfollowFlow(dispatch, id, friendsAPI.follow, followUser);

export const unfollow = id => dispatch => followUnfollowFlow(dispatch, id, friendsAPI.unfollow, unfollowUser);

export default friendsReducer;