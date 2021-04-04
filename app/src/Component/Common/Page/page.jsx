import React from 'react';
import './page.scss';
import cn from 'classnames';

const Page = (props) => {

    const { header, main, className, clns } = props;
    const pageClasses = cn('page', className)
    const mainClasses = cn('page__main', clns && clns[0]);

    return (
        <div className={pageClasses}>
            <header className="page__header">
                {header}
            </header>
            <main className={mainClasses}>
                {main}
            </main >
        </div>
    );
};

export default Page;
