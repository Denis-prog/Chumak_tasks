import React from 'react';
import { useStore } from '../../../../../context';
import withStyle from '../../../../../HOC/withStyle';
import IndicatorList from './IndicatorList';

const IndicatorListContainer = (props) => {
    const { state } = useStore();
    const indicators = [
        { id: 1, type: 'health', label: 'Здоровье' },
        { id: 2, type: 'thirst', label: 'Жажда' },
        { id: 3, type: 'hunger', label: 'Голод' },
        { id: 4, type: 'fatigue', label: 'Усталость' },
    ]

    return (
        <IndicatorList {...props} state={state} indicators={indicators} />
    );
};

export default withStyle(IndicatorListContainer, 'indicator-list__item');;
