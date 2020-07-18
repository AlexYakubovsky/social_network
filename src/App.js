import React from "react";
import "./App.css";
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import MessagesContainer from "./components/Messages/MessagesContainer";
import Friends from "./components/Friends/Friends";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <main className='main'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/messages'
                       render={() => <MessagesContainer/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;