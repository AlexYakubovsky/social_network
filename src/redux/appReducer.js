import {getAuthUserData} from "./authReducer";

const INITIATED_SUCCESSFULLY = 'app/INITIATED_SUCCESSFULLY';

const initialState = {
    isInitiated: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIATED_SUCCESSFULLY:
            return {...state, isInitiated: true};

        default:
            return state;
    }
};

export const initiatedSuccessfully = () => ({type: INITIATED_SUCCESSFULLY});

export const initiatedApp = () => dispatch => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => dispatch(initiatedSuccessfully()))
};

export default appReducer;