import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;