import {getAuthUserData} from "./authReducer";

const INITIATED_SUCCESSFULLY = 'app/INITIATED_SUCCESSFULLY'
const SHOW_ERROR = 'app/SHOW_ERROR'
const CLOSE_ERROR = 'app/CLOSE_ERROR'

const initialState = {
    isInitiated: false,
    isShowError: false,
    appErrors: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIATED_SUCCESSFULLY:
            return {...state, isInitiated: true}

        case SHOW_ERROR:
            const error = {
                id: state.appErrors.length,
                errorName: action.error.name,
                errorMessage: action.error.message
            }

            return {...state, isShowError: true, appErrors: [...state.appErrors, error]}

        case CLOSE_ERROR:
            return {...state, isShowError: false, appErrors: [state.appErrors.length = 0]}

        default:
            return state
    }
}

export const initiatedSuccessfully = () => ({type: INITIATED_SUCCESSFULLY})
export const showError = error => ({type: SHOW_ERROR, error})
export const closeError = () => ({type: CLOSE_ERROR})

export const initiatedApp = () => dispatch => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise]).then(() => dispatch(initiatedSuccessfully()))
}

export default appReducer