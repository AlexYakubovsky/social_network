import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, changeMessageValue, changePostValue, subscriber} from "./redux/state";
import state from "./redux/state"

export let rerenderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     addMessage={addMessage}
                     changePostValue={changePostValue}
                     changeMessageValue={changeMessageValue}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

subscriber(rerenderAllTree);
rerenderAllTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();