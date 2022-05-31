import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgetPasswordPage from './ForgetPasswordPage';
import Issues from '../Issues';
import './Pages.css';

export default function StartPage() {
  return (
    <>
        <Switch>
                <Route path="/" component={ LoginPage } exact/>
                <Route path="/register" component={ RegisterPage } />
                <Route path='/Issues' component={ Issues } />
                <Route path='/forgetpassword' component={ ForgetPasswordPage} />
        </Switch>
    </>
  )
}
