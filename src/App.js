import React from "react";
import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;