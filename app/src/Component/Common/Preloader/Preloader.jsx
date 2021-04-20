import React from 'react';
import './preloader.scss';
import Overlay from '../Overlay'
import preloader from './assets/preloader.svg';


const Preloader = () => {
    return (
        <Overlay>
            <div className='preloader'>
                <img src={preloader} alt="preloader" />
            </div>
        </Overlay>
    )
};

export default Preloader;
