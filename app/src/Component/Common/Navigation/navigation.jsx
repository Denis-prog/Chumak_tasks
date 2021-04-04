import React from 'react';
import List from '../List';
import Link from '../Link';
import cn from 'classnames';

const Navigation = (props) => {
    const { elements, className, clns, activeClassName } = props;
    const classes = cn('navigation', className);
    const classesList = cn('navigation-list', clns && clns[0]);
    const classesListItem = clns && clns[1];
    const classesLink = clns && clns[2];

    return (
        <nav className={classes}>
            <List elements={elements} className={classesList} cln={classesListItem}>
                {(item) => (
                    <Link activeClassName={activeClassName} className={classesLink} path={item.path} label={item.label} />
                )}
            </List>
        </nav>
    );
};


export default Navigation;
