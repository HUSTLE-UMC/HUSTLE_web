import React from 'react';
import * as S from './Styles';
import { TimeTableProps } from './TimeTableProps';
import TeamListInfo from '../../TeamListInfo/TeamListInfo';
import TeamListInfoReverse from '../../TeamListInfo/TeamListInfoReverse';
import TeamInfoTest from '../../../assets/images/TeamInfoTest.png';
import MatchButton from '../../MatchButton/MatchButton';
import { useNavigate } from 'react-router-dom';

const TimeTableList = ({
  time,
  matchName,
  team1,
  score,
  team2
}: Pick<
  TimeTableProps,
  'time' | 'matchName' | 'team1' | 'score' | 'team2'
>) => {
  const navigate = useNavigate();
  const handleResultClick = () => {
    navigate('/competitions/input');
  };
  const handleRecordClick = () => {
    navigate('/competitions/detail');
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
          label='결과입력'
          onClick={handleResultClick}
        ></MatchButton>
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
