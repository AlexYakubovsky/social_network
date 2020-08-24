import React from "react";
import "./App.css";
import {Route} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Footer from "./components/Footer/Footer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initiatedApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initiatedApp()
    }

    render() {
        return !this.props.isInitiated ? <Preloader/> :
            <div className='app'>
                <HeaderContainer/>
                <Nav/>
                <main className='main'>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={() => <MessagesContainer/>}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                </main>
                <Footer/>
            </div>
    }
}

const mapStateToProps = state => ({isInitiated: state.app.isInitiated});

export default compose(
    connect(mapStateToProps, {initiatedApp})
)(App);