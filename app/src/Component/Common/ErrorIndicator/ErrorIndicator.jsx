import React from 'react';
import './errorIndicator.scss';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="error-indicator__description">Что-то пошло не так</span>
        </div>
    );
};

export default ErrorIndicator;
