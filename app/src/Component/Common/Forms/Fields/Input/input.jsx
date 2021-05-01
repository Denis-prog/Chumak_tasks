import React from 'react';
import IndicatorInvalidField from '../IndicatorInvalidField';
import cn from 'classnames';
import './input.scss';

const Input = (props) => {
    const { inputId, value, name, updateData, className, type, defaultValue, validationResult, onBlur } = props;
    const classesInput = cn('input', className);
    const onBlurHandler = (e) => {
        onBlur && onBlur(e);
    };

    return (
        <>
            <input id={inputId} className={classesInput} type={type || 'text'}
                name={name}
                value={defaultValue || value}
                onChange={({ target: { value } }) => { updateData(value) }}
                onFocus={(e) => onBlurHandler(e)}
                checked={type === 'radio' ? value === defaultValue : undefined}
                autoComplete ="off" />
            {validationResult &&
                < IndicatorInvalidField message={validationResult.message} />
            }
        </>
    )
};

export default Input;
