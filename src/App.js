import React from "react";
import "./App.css";
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Friends from "./components/Friends/Friends";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <main className='main'>
                <Route path='/profile' component={Profile}/>
                <Route path='/messages' component={Messages}/>
                <Route path='/friends' component={Friends}/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;