import React from 'react';
import AuthForm from './AuthForm';
import state from '../../State';
import './authPage.scss';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react';

const AuthPage = observer(() => {

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
