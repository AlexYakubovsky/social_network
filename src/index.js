import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";

export let rerenderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     addPost={store.addPost.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     changePostValue={store.changePostValue.bind(store)}
                     changeMessageValue={store.changeMessageValue.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

store.subscriber(rerenderAllTree);
rerenderAllTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();