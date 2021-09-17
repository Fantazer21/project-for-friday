import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperInputText from "./superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "./superComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "./superComponents/c3-SuperCheckbox/SuperCheckbox";
import {Route, Switch} from "react-router-dom";

function Login() {
    return <Login/>;
}

function Profile() {
    return <Profile/>;
}

function EnterNewPassword() {
    return <EnterNewPassword/>;
}

function PasswordRecovery() {
    return <PasswordRecovery/>;
}

function Registration() {
    return <Registration/>;
}

function TestComponents() {
    return <TestComponents/>;
}

function Error404() {
    return <Error404/>;
}

function App() {
    return (
        <div className="App">
            <main>
                <Switch>
                    <Route path={'/learning-cards/'} render={() => <div>Hi!</div>}/>
                    <Route exact path={'/login'} render={() => <Login/>}/>
                    <Route exact path={'/profile'} render={() => <Profile/>}/>
                    <Route exact path={'/new-password'} render={() => <EnterNewPassword/>}/>
                    <Route exact path={'/password-recovery'} render={() => <PasswordRecovery/>}/>
                    <Route exact path={'/registration'} render={() => <Registration/>}/>
                    <Route exact path={'/test-components'} render={() => <TestComponents/>}/>
                    <Route path={'*'} render={() => <Error404/>}/>
                </Switch>
            </main>
        </div>


    );
}

export default App;
