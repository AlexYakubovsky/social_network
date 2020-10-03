import React from "react";
import "./App.css";
import {Route} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Footer from "./components/Footer/Footer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initiatedApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {getIsInitiated} from "./reselects/appReselect";
import withSuspense from "./components/hoc/withSuspense";

const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));

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
                    <Route path='/login' render={withSuspense(LoginContainer)}/>
                    <Route path='/profile/:userId?' render={ProfileContainer}/>
                    <Route path='/messages' render={withSuspense(MessagesContainer)}/>
                    <Route path='/friends' render={withSuspense(FriendsContainer)}/>
                </main>
                <Footer/>
            </div>
    }
}

const mapStateToProps = state => ({isInitiated: getIsInitiated(state)});

export default compose(
    connect(mapStateToProps, {initiatedApp})
)(App);