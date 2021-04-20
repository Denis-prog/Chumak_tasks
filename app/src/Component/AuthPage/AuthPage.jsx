import React from 'react';
import AuthForm from './AuthForm';
import state from '../../State';
import './authPage.scss';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react';

const AuthPage = observer(() => {
    console.log(state.isAuth);
    if (state.isAuth) {
        return <Redirect to={"/"} />
    }

    return (
        <div className="auth-page">
            <AuthForm className="auth-page__form" />
        </div>
    );
});

export default AuthPage;
