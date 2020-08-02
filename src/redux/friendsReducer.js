const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    totalCount: null,
    currentPage: 1,
    pageSize: 50,
    isFetching: false
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(v => v.id === action.userId ? {...v, followed: true} : v)
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(v => v.id === action.userId ? {...v, followed: false} : v)
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state;
    }
};

export const setUsers = users => ({type: SET_USERS, users});
export const followUser = userId => ({type: FOLLOW, userId});
export const unfollowUser = userId => ({type: UNFOLLOW, userId});
export const setTotalCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

export default friendsReducer;