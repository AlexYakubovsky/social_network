import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
// import Messages from "./components/Messages/Messages";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <main className='main'>
                <Profile/>
                {/*<Messages/>*/}
            </main>
            <Footer/>
        </div>
    );
};

export default App;