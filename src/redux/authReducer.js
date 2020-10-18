import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.payload};

        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const getAuthUserData = () => async dispatch => {
    const data = await authAPI.authMe();

    if (data.resultCode === 0) {
        const {id, email, login} = data.data;

        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const loginUser = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            dispatch(stopSubmit('login', {_error: data.messages[0]}));
        }
    });
};

export const logoutUser = () => async dispatch => {
    const data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;