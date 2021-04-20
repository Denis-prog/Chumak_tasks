import React from 'react';
import List from '../../List';
import Member from './Member';
import IconCircle from '../../IconCircle';
import cn from 'classnames';
import './membersList.scss';

const MemberList = (props) => {

  const { className, participants, countParticipantsHidden } = props;

  const classes = cn(className, 'members');

  const count = countParticipantsHidden && (<IconCircle className="members__indicator">
    <p  className="members__indicator-text">{`+${countParticipantsHidden}`}</p>
  </IconCircle>)

  return (
    <div className={classes}>
      <List className="members__list" clnItem="members__list-item" elements={participants}>
        {(item) => <Member member={item} />}
      </List>
      {count}
    </div>
  );
}

export default MemberList;
