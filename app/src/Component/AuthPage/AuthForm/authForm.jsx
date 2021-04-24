import React, { useEffect, useState } from 'react';
import state from '../../../State';
import cn from 'classnames';
import './authForm.scss';
import { observer } from 'mobx-react';

const AuthForm = observer((props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let { authUser, isErrorAuthorization, setErrorAuthorization } = state;
    const { className } = props;
    const classes = cn('auth-form', className);

    const onHandler = (e) => {
        e.preventDefault();
        authUser(email, password);
    };

    useEffect(() => {
        if (isErrorAuthorization) {
            setErrorAuthorization(false);
        }
    }, [email, password]);


    return (
        <form action="#" method="post" className={classes} onSubmit={onHandler}>
            <p className="auth-form__item">
                <label htmlFor="authFieldEmail" className="auth-form__item-label">Email:</label>
                <input id="authFieldEmail" type="email" value={email} onChange={({ target: { value } }) => setEmail(value)} />
            </p>
            <p className="auth-form__item">
                <label htmlFor="authFieldPassword" className="auth-form__item-label">Password:</label>
                <input id="authFieldPassword" type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} />
            </p>
            <button className="auth-form__submit">Войти</button>
            {isErrorAuthorization && <p className="auth-form__error">ошибка аутентификации</p>}
        </form >
    );
});

export default AuthForm;
