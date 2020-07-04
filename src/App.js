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
                       render={() => <Profile profilePage={props.state.profilePage}
                                              addPost={props.addPost}
                                              changePostValue={props.changePostValue}/>}/>
                <Route path='/messages'
                       render={() => <Messages messagesPage={props.state.messagesPage}
                                               addMessage={props.addMessage}
                                               changeMessageValue={props.changeMessageValue}/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;