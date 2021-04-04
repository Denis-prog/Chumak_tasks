import React, { useState } from 'react';
import { useStore } from '../../../../context';
import ComandLine from './comandLine';
import './comandLine.scss';

const ComandLineContainer = (props) => {
    const { state, dispatch } = useStore();
    const [value, updateValue] = useState('');
    const { сontrolDetails } = state;

    return (
        <ComandLine сontrolDetails={сontrolDetails}
            value={value}
            updateValue={updateValue}
            {...props}
            dispatch={dispatch} />
    );
};

export default ComandLineContainer;
