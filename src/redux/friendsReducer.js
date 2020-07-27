const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: []
};
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
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


        default:
            return state;
    }

};

export const setUsers = users => ({type: SET_USERS, users});
export const followUser = userId => ({type: FOLLOW, userId});
export const unfollowUser = userId => ({type: UNFOLLOW, userId});

export default friendsReducer;