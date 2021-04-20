import React from 'react';
import './member.scss';

const Member = (props) => {
    const { member: { icon, firstName, lastName } } = props;

    return (
        <div className="member" data-member={`${firstName} ${lastName}`}>
            <img className="member__img" src={`./assets/${icon}`} alt={`${firstName} ${lastName}`} />
        </div>
    );
};

export default Member;
