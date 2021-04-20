import { observer } from 'mobx-react';
import Preloader from '../Component/Common/Preloader';
import state from '../State';

const withPreload = (Component) => {

    const Wrapper = observer((props) => {
        const { isFetching } = state;

        if (isFetching) {
            return <Preloader />
        }

        return <Component {...props} />
    });

    return Wrapper;
};

export default withPreload;
