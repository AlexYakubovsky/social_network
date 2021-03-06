import React, {lazy, Suspense, useEffect} from "react"
import "./App.css"
import {Redirect, Route, Switch} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import {compose} from "redux"
import {connect} from "react-redux"
import {closeError, initiatedApp} from "./redux/appReducer"
import Preloader from "./components/common/Preloader/Preloader"
import {getAppErrors, getIsInitiated, getIsShowError} from "./reselects/appReselect"
import ShowError from "./components/common/showError/ShowError"
import error404 from "./components/common/error404/error404"
import cn from "classnames"

const LoginContainer = lazy(() => import('./components/Login/LoginContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'))
const FriendsContainer = lazy(() => import('./components/Friends/FriendsContainer'))

const App = ({initiatedApp, isInitiated, isShowError, closeError, appErrors}) => {
    useEffect(() => initiatedApp())

    return !isInitiated ? <Preloader/> :
        <div className={cn('app', {show_error: isShowError})}>
            <HeaderContainer/>
            <Nav/>
            <main className='main'>
                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route path='/' exact component={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/login' component={LoginContainer}/>
                        <Route path='/profile/:userId?' component={ProfileContainer}/>
                        <Route path='/messages' component={MessagesContainer}/>
                        <Route path='/friends' component={FriendsContainer}/>
                        <Route path='*' component={error404}/>
                    </Switch>
                </Suspense>
            </main>
            <Footer/>

            {isShowError && <ShowError closeError={closeError} appErrors={appErrors}/>}
        </div>
}

const mapStateToProps = state => ({
    isInitiated: getIsInitiated(state),
    appErrors: getAppErrors(state),
    isShowError: getIsShowError(state)
})

export default compose(
    connect(mapStateToProps, {initiatedApp, closeError})
)(App)