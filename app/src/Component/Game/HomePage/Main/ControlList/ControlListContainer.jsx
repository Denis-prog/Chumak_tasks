import React from 'react';
import { useStore } from '../../../../../context';
import withStyle from '../../../../../HOC/withStyle';
import ControlList from './ControlList';

const ControlListContainer = (props) => {
    const { dispatch } = useStore();
    const controls = [
        { id: 1, title: 'Есть', type: 'eat' },
        { id: 2, title: 'Пить', type: 'drink' },
        { id: 3, title: 'Отдыхать', type: 'rest' },
        { id: 4, title: 'Заниматься спортом', type: 'sport' },
    ];

    return (
        <ControlList {...props} controls={controls} dispatch={dispatch} />
    );
}

export default withStyle(ControlListContainer, 'control-list__item');
