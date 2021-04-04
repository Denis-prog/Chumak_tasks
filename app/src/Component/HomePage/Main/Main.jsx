import React from 'react';
import PictureIndicatorListContainer from './PictureIndicatorList';
import IndicatorListContainer from './IndicatorList';
import ControlListContainer from './ControlList';
import ControlDetailsContainer from './ControlDetails';
import ComandLineContainer from './';

const Main = () => {
    return (
        <>
            <section className="row">
                <section className="column">
                    <PictureIndicatorListContainer />
                </section>
            </section>
            <section className="row">
                <section className="column column_left">
                    <IndicatorListContainer />
                </section>
                <section className="column">
                    <ControlListContainer />
                </section>
            </section>
            <section className="row">
                <section className="column">
                    <ControlDetailsContainer />
                </section>
            </section>
            <section className="row">
                <section className="column">
                    <ComandLineContainer />
                </section>
            </section>
        </>
    );
};

export default Main;

{/* <section className="row row_top">
<section className="column">
    {header}
</section>
</section> */}