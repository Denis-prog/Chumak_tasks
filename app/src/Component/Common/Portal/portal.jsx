import { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

const el = document.createElement('div');
el.id = 'modal-root';

const Portal = ({ children }) => {

    useLayoutEffect(() => {
        document.body.append(el);

        return (() => {
            document.body.removeChild(el);
        });

    }, []);

    return createPortal(children, el);
};

export default Portal;

/* class Portal extends React.Component {
    el = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentDidUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return (
            ReactDOM.createPortal(this.props.children, this.el)
        );
    }

} */