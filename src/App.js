import React, {lazy, Suspense} from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initiatedApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {getIsInitiated} from "./reselects/appReselect";

const LoginContainer = lazy(() => import('./components/Login/LoginContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'));
const FriendsContainer = lazy(() => import('./components/Friends/FriendsContainer'));

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
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route path='/login' component={LoginContainer}/>
                            <Route path='/profile/:userId?' component={ProfileContainer}/>
                            <Route path='/messages' component={MessagesContainer}/>
                            <Route path='/friends' component={FriendsContainer}/>
                        </Switch>
                    </Suspense>
                </main>
                <Footer/>
            </div>
    }
}

const mapStateToProps = state => ({isInitiated: getIsInitiated(state)});

export default compose(
    connect(mapStateToProps, {initiatedApp})
)(App);