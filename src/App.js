import React from "react";
import "./App.css";
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <main className='main'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/messages' render={() => <MessagesContainer/>}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;