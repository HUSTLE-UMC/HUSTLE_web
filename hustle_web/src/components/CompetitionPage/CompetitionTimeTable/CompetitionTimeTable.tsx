import React from 'react';
import TimeTableLabel from '../TimeTableList/TitmeTableLabel';
import TimeTableList from '../TimeTableList/TimeTableList';
import { TimeTableProps } from '../TimeTableList/TimeTableProps';
import * as C from './Styles';

const CompetitionTimeTable: React.FC<TimeTableProps> = (props) => {
  return (
    <C.CompetitionTimeTableContainer>
      {/* TimeTableList에 들어가야할 props가 Label에 가있는 거같음*/}
      <TimeTableLabel
        date={props.date}
        matchName={props.matchName}
        score={props.score}
        team1={props.team1}
        team2={props.team2}
        time={props.time}
      />
      <TimeTableList {...props} />
    </C.CompetitionTimeTableContainer>
  );
};

export default CompetitionTimeTable;
