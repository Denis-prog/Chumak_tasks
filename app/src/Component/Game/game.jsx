import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useStore } from '../../context';
import HomePage from './HomePage';
import HistoryPage from './HistoryPage';
import { counterRepeatAC } from '../../store/actionCreators';

const Game = () => {
    const { dispatch } = useStore();

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(counterRepeatAC());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [dispatch]);

    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/history" exact component={HistoryPage} />
        </>
    );
};

export default Game;
