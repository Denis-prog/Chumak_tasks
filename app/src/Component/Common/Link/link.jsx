import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './link.scss';

const Link = (props) => {
    const { children, className, path, activeClassName } = props;
    const classes = cn('link', className)

    return (
        <NavLink activeClassName={activeClassName || 'link_active'} className={classes} exact to={path}>
            {children}
        </NavLink>
    );


};

export default Link;
