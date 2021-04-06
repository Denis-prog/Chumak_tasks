import React from 'react';
import GameOverSplashScreen from './gameOverSplashScreen';
import { useStore } from '../../../../context';

const GameOverSplashScreenContainer = () => {
    const { dispatch } = useStore();

    return (
        <section className="row">
            <section className="column">
                <GameOverSplashScreen dispatch={dispatch} />
            </section>
        </section>
    )
};

export default GameOverSplashScreenContainer;
