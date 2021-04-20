import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import state from '../State';

const withRedirect = (Component) => {

    const Wrapper = observer((props) => {
        const { isAuth } = state;

        if (!isAuth) {
            return <Redirect to={'/auth'} />
        }

        return <Component {...props} />
    });

    return Wrapper;
};

export default withRedirect;
