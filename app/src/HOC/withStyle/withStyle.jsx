import React from 'react';


const withStyle = (Component, ...clns) => {

    return (props) => {
        return (<Component {...props} clns={clns} />);
    }
};

export default withStyle;
