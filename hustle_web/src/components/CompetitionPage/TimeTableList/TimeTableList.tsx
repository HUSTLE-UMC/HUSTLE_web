import React from 'react';
import * as S from './Styles';
import { TimeTableProps } from './TimeTableProps';
import TeamListInfo from '../../TeamListInfo/TeamListInfo';
import TeamListInfoReverse from '../../TeamListInfo/TeamListInfoReverse';
import TeamInfoTest from '../../../assets/images/TeamInfoTest.png';
import MatchButton from '../../MatchButton/MatchButton';

const TimeTableList = ({
  time,
  matchName,
  team1,
  score,
  team2
}: TimeTableProps) => {
  const handleRecordClick = () => {
    console.log('기록 보기 버튼이 클릭되었습니다.');
  };
  return (
    <S.ListContainer>
      <S.TimeWrap>{time}</S.TimeWrap>
      <S.MatchNameWrap>{matchName}</S.MatchNameWrap>
      <S.MatchResultWrap>
        <TeamListInfo logo={TeamInfoTest} name={team1}></TeamListInfo>
        <S.MatchResultBox>{score}</S.MatchResultBox>
        <TeamListInfoReverse
          logo={TeamInfoTest}
          name={team2}
        ></TeamListInfoReverse>
      </S.MatchResultWrap>
      <S.ButtonBox>
        <MatchButton
          type={'small'}
          label='기록보기'
          onClick={handleRecordClick}
        ></MatchButton>
      </S.ButtonBox>
    </S.ListContainer>
  );
};

export default TimeTableList;
