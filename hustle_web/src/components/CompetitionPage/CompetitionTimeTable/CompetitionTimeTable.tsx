import React from 'react';
import TimeTableLabel from '../TimeTableList/TitmeTableLabel';
import TimeTableList from '../TimeTableList/TimeTableList';
import { TimeTableProps } from '../TimeTableList/TimeTableProps';
import * as C from './Styles';

const CompetitionTimeTable = ({
  date,
  matchName,
  score,
  team1,
  team2,
  time
}: TimeTableProps) => {
  return (
    <C.CompetitionTimeTableContainer>
      {/* TimeTableList에 들어가야할 props가 Label에 가있는 거같음*/}
      <TimeTableLabel
        date={date}
        matchName={matchName}
        score={score}
        team1={team1}
        team2={team2}
        time={time}
      />
      <TimeTableList
        time={time}
        date={date}
        matchName={matchName}
        team1={team1}
        team2={team2}
        score={score}
      />
    </C.CompetitionTimeTableContainer>
  );
};
export default CompetitionTimeTable;
