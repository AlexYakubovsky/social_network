const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        {id: 1, isFollow: true, firstName: 'alex', lastName: 'yakubovsky', age: '21', location: 'Moscow', photo: 'https://img2.freepng.ru/20180716/lra/kisspng-logo-person-user-person-icon-5b4d2bd2236ca6.6010202115317841461451.jpg'},
        {id: 2, isFollow: false, firstName: 'kirill', lastName: 'trushin', age: '21', location: 'Moscow', photo: 'https://img2.freepng.ru/20180716/lra/kisspng-logo-person-user-person-icon-5b4d2bd2236ca6.6010202115317841461451.jpg'},
        {id: 3, isFollow: false, firstName: 'evgeny', lastName: 'smerdow', age: '21', location: 'Moscow', photo: 'https://img2.freepng.ru/20180716/lra/kisspng-logo-person-user-person-icon-5b4d2bd2236ca6.6010202115317841461451.jpg'},
        ]
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(v => v.id === action.userId ? {...v, isFollow: true} : v)
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(v => v.id === action.userId ? {...v, isFollow: false} : v)
            };

        default:
            return state;
    }
};

export const followUser = userId => ({type: FOLLOW, userId});
export const unfollowUser = userId => ({type: UNFOLLOW, userId});

export default friendsReducer;