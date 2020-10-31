import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {showError} from "./appReducer";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.payload};

        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, captcha: action.url};

        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth, captcha) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth, captcha}
});
export const getCaptchaUrlSuccess = url => ({type: GET_CAPTCHA_URL_SUCCESS, url});


export const getAuthUserData = () => async dispatch => {
    try {
        const data = await authAPI.authMe();

        if (data.resultCode === 0) {
            const {id, email, login} = data.data;

            dispatch(setAuthUserData(id, email, login, true, null));
        }
    } catch (error) {
        dispatch(showError(error))
    }
};

export const loginUser = (email, password, rememberMe, captcha) => dispatch => {
    try {
        authAPI.login(email, password, rememberMe, captcha).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }

                dispatch(stopSubmit('login', {_error: data.messages[0]}));
            }
        });
    } catch (error) {
        dispatch(showError(error))
    }
};

export const logoutUser = () => async dispatch => {
    try {
        const data = await authAPI.logout();

        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    } catch (error) {
        dispatch(showError(error))
    }
};

export const getCaptchaUrl = () => async dispatch => {
    try {
        const data = await authAPI.getCaptchaUrl();

        dispatch(getCaptchaUrlSuccess(data.url));
    } catch (error) {
        dispatch(showError(error))
    }
};

export default authReducer;