import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Common/Button';
import SplashScreen from '../../../Common/SplashScreen';
import { restartAC } from '../../../../store/actionCreators';
import './gameOver.scss';
import { useHistory } from 'react-router-dom';

const GameOverSplashScreen = (props) => {
    const history = useHistory();
    const { dispatch } = props;

    const onClick = () => {
        dispatch(restartAC());
        history.push('/');
    };

    return (
        <div className="game-over">
            <SplashScreen img="game_over.png" />
            <Button className="game-over__restart-btn" onClick={onClick} >Начать заново</Button>
        </div>
    );
};

GameOverSplashScreen.propTypes = {
    dispatch: PropTypes.func,
};

export default GameOverSplashScreen;
