import React from 'react';
import List from '../../List';
import Member from './Member';
import IconCircle from '../../RoundIcon';
import cn from 'classnames';
import { getUniqCounts } from '../../../../Helper';
import './membersList.scss';

const MemberList = (props) => {

  const { className, taskId, taskAuthor, taskExecutor, comments, users } = props;

  const taskCommentsId = comments.filter((comment) => comment.taskId === taskId);
  const commentatorsId = taskCommentsId.map((comment) => comment.author);
  const participantsId = getUniqCounts([taskAuthor, taskExecutor, ...commentatorsId]);

  const participantsVisible = participantsId
      .slice(0, 4)
      .reduce((prev, current) => [...prev, users.find((user) => user.id === current)], []);

  let countParticipantsHidden = participantsId.length - 4;
  countParticipantsHidden = countParticipantsHidden > 0 ? countParticipantsHidden : null

  const classes = cn(className, 'members');

  const count = countParticipantsHidden && (<IconCircle className="members__indicator">
    <p  className="members__indicator-text">{`+${countParticipantsHidden}`}</p>
  </IconCircle>)

  return (
    <div className={classes}>
      <List className="members__list" clnItem="members__list-item" elements={participantsVisible}>
        {(item) => <Member member={item} />}
      </List>
      {count}
    </div>
  );
}

export default MemberList;
