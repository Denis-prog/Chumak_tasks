import React from 'react';
import GameOverSplashScreen from './gameOverSplashScreen';
import { useStore } from '../../../../context';

const GameOverSplashScreenContainer = () => {
    const { dispatch } = useStore();

    return (
        <>
            <GameOverSplashScreen dispatch={dispatch} />
        </>
    )
};

export default GameOverSplashScreenContainer;
