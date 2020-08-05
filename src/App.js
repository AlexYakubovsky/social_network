import React from "react";
import "./App.css";
import {Route} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app'>
            <HeaderContainer/>
            <Nav/>
            <main className='main'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <MessagesContainer/>}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;