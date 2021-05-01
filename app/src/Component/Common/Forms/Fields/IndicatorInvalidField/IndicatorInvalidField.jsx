import React from 'react';
import './indicatorInvalidField.scss';

const IndicatorInvalidField = (props) => {
    const { message } = props;

    return (<span className="indicator-invalid-field">{message}</span>);
};

export default IndicatorInvalidField;
