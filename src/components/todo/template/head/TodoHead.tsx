import React from 'react';
import styled from 'styled-components';
import { getDateString, getDayString } from 'src/utils/date';

const TodoHead = () => {
  const dayString = getDayString(date);
  const dateString = getDateString(date);

  return (
    <TodoHeadBlock>
      <DayText>{dayString}</DayText>
      <DateText>{dateString}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);

const date = new Date();

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;
