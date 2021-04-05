import React from 'react';
import { useStore } from '../../../../../context';
import withStyle from '../../../../../HOC/withStyle';
import HistoryList from './historyList';

const HistoryListContainer = (props) => {
    const { state } = useStore();

    return (
        <HistoryList elements={state.history} {...props}/>
    );
};

export default withStyle(HistoryListContainer, 'history-list__item');
