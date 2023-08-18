import React from 'react';
import * as S from './Styles';
import { TimeTableProps } from './TimeTableProps';

interface TimeTableListProps {
  timeTable: TimeTableProps;
}

const TimeTableList: React.FC<TimeTableListProps> = ({ timeTable }) => {
  return (
    <S.ListContainer>
      <S.TimeWrap>{timeTable.time}</S.TimeWrap>
      <S.MatchNameWrap>{timeTable.matchName}</S.MatchNameWrap>
      <S.TeamLabel>{team1}</S.TeamLabel>
      <S.TeamLabel>{team2}</S.TeamLabel>
      <S.ScoreLabel>{score}</S.ScoreLabel>
    </S.ListContainer>
  );
};

export default TimeTableList;
