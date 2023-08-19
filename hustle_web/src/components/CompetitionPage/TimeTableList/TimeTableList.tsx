import React from 'react';
import * as S from './Styles';
import { TimeTableProps } from './TimeTableProps';
import TeamListInfo from '../../TeamListInfo/TeamListInfo';
import TeamListInfoReverse from '../../TeamListInfo/TeamListInfoReverse';
import TeamInfoTest from '../../../assets/images/TeamInfoTest.png';

interface TimeTableListProps {
  timeTable: TimeTableProps;
}

const TimeTableList: React.FC<TimeTableListProps> = ({ timeTable }) => {
  return (
    <S.ListContainer>
      <S.TimeWrap>{timeTable.time}</S.TimeWrap>
      <S.MatchNameWrap>{timeTable.matchName}</S.MatchNameWrap>
      <S.MatchResultWrap>
        <TeamListInfo logo={TeamInfoTest} name={timeTable.team1}></TeamListInfo>
        <S.MatchResultBox>{timeTable.score}</S.MatchResultBox>
        <TeamListInfoReverse
          logo={TeamInfoTest}
          name={timeTable.team2}
        ></TeamListInfoReverse>
      </S.MatchResultWrap>
    </S.ListContainer>
  );
};

export default TimeTableList;
