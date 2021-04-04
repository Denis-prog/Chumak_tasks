import React from 'react';
import { useStore } from '../../../context';
import withStyle from '../../../HOC/withStyle';
import HistoryList from './historyList';

const HistoryListContainer = () => {
    const { state } = useStore();

    return (
        <HistoryList elements={state.history} />
    );
};

export default withStyle(HistoryListContainer, 'd');
