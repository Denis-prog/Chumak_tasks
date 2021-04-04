import React, { useReducer } from 'react';
import { reducer, initialState } from '../store/store';

export const StoreContext = React.createContext({
    state: initialState,
    dispatch: () => { },
});

export const useStore = () => {
    return React.useContext(StoreContext);
}

const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;
