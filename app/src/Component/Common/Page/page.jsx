import React from 'react';
import './page.scss';

const Page = (props) => {

    const { header, main } = props;

    return (
        <div className="page">
            <header className="page__header">
                {header}
            </header>
            <main className="page__main">
                {main}
                {/*  */}
            </main >
        </div>
    );
};

export default Page;
