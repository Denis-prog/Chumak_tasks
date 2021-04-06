import React from 'react';
import PropTypes from 'prop-types';
import './page.scss';
import cn from 'classnames';

const Page = (props) => {

    const { header, main, className, clns } = props;
    const pageClasses = cn('page', className)
    const mainClasses = cn('page__main', clns && clns[0]);

    const Header = header ?
        (<header className="page__header">
            {header}
        </header>)
        : null;

    const Main = main ?
        (<main className={mainClasses}>
            {main}
        </main >)
        : null;

    return (
        <div className={pageClasses}>
            {Header}
            {Main}
        </div>
    );
};

Page.propTypes = {
    header: PropTypes.element,
    main: PropTypes.element,
    className: PropTypes.string,
    clns: PropTypes.arrayOf(PropTypes.string),
};

export default Page;
