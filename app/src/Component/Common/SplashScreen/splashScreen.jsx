import React from 'react';
import PropTypes from 'prop-types';
import './splashScreen.scss';

const SplashScreen = (props) => {
    const { img } = props;

    return (
        <div className="splash-screen">
            <img className="splash-screen__img" src={`./assets/${img}`} alt="splash screen" />
        </div>
    );
};

SplashScreen.propTypes = {
    img: PropTypes.string,
};

export default SplashScreen;
