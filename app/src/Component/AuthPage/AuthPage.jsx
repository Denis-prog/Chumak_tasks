import React, { useState, useEffect } from 'react';
import AuthForm from '../Common/Forms/AuthForm';
import state from '../../State';
import './authPage.scss';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react';

const AuthPage = observer(() => {

    const [formData, updateFormData] = useState({
        email: '',
        password: '',
    });

    let { authUser, isErrorAuthorization, setErrorAuthorization } = state;

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
        if (isErrorAuthorization) {
            setErrorAuthorization(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    if (state.isAuth) {
        return <Redirect to={"/"} />
    }

    return (
        <div className="auth-page">
            <AuthForm className="auth-page__form" formData={formData} onUpdateFormData={onUpdateFormData}
                onSubmit={onSubmit} isErrorAuthorization={isErrorAuthorization} />
        </div>
    );
});

export default AuthPage;
