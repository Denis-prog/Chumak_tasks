import React from 'react';
import './splashScreen.scss';

const SplashScreen = (props) => {
    const { img } = props;

    return (
        <div className="splash-screen">
            <img className="splash-screen__img" src={`./assets/${img}`}  alt="splash screen" />
        </div>
    );
};

export default SplashScreen;

