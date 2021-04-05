import React from 'react';
import Button from '../../../Common/Button';
import SplashScreen from '../../../Common/SplashScreen';
import { restartAC } from '../../../../store/actionCreators';
import './gameOver.scss';

const GameOverSplashScreen = (props) => {
    const { dispatch } = props;

    return (
        <section className="game-over">
            <SplashScreen img="game_over.png" />
            <Button className="game-over__restart-btn" onClick={() => { dispatch(restartAC()) }} >Начать заново</Button>
        </section>
    )
};

export default GameOverSplashScreen;
