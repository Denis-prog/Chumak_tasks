import React, { useState, useEffect } from 'react';
import AuthForm from '../../Common/Forms/AuthForm';
import state from '../../../State';
import Link from '../../Common/Link';
import './authPage.scss';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react';

const AuthPage = observer(() => {
    const [formData, updateFormData] = useState({
        email: '',
        password: '',
    });
    let { authUser, isErrorAuth, setErrorAuth } = state;
    const onUpdateFormData = (field, value) => {
        updateFormData(
            {
                ...formData,
                [field]: value,
            }
        )
    };
    const onSubmit = () => {
        authUser({ ...formData });
    };

    useEffect(() => {
        if (isErrorAuth) {
            setErrorAuth(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    if (state.isAuth) {
        return <Redirect to={"/"} />
    }

    return (
        <main className="auth-page">
            <AuthForm className="auth-page__form" formData={formData} onUpdateFormData={onUpdateFormData}
                onSubmit={onSubmit} isErrorAuth={isErrorAuth} />
            <Link className="auth-page__link-to-registration" path='/registration'>Регистрация</Link>
        </main>
    );
});

export default AuthPage;
