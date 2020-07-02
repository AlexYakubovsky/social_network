import React from "react";
import "./App.css";
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Friends from "./components/Friends/Friends";
import Footer from "./components/Footer/Footer";

const App = props => {
    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <main className='main'>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage.postData} addPost={props.addPost}/>}/>
                <Route path='/messages'
                       render={() => <Messages state={props.state.messagesPage} addMessage={props.addMessage}/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;