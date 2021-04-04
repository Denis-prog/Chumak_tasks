import React from 'react';
import List from '../List';
import Link from '../Link';
import cn from 'classnames';

const Navigation = (props) => {
    const { elements, className, clns } = props;
    const classes = cn('navigation', className);
    const classesList = cn('navigation-list', clns[0]);
    const classesListItem = clns[1];

    return (
        <nav className={classes}>
            <List elements={elements} className={classesList} cln={classesListItem}>
                {(item) => (
                    <Link className={clns[2]} path={item.path} label={item.label} />
                )}
            </List>
        </nav>
    );
};


export default Navigation;
