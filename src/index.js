import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

const postData = [
    {id: 1, message: 'Hi', like: 1},
    {id: 2, message: 'It is my second post', like: 7},
    {id: 3, message: 'How are you?', like: 3},
    {id: 4, message: 'What do you think about my last post?:)', like: 5}
];

const userData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Kirill'},
    {id: 3, name: 'Evgeny'},
    {id: 4, name: 'Olga'},
];

const dialogData = [
    {id: 1, message: 'hello'},
    {id: 1, message: 'how are you?'},
    {id: 1, message: 'what do think about this?'},
    {id: 1, message: 'are you sure?'},
];

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App postData={postData} userData={userData} dialogData={dialogData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();