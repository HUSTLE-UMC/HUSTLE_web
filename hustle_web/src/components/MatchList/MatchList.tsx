import React from 'react';
import * as L from './Styles';
import { useNavigate } from 'react-router-dom';
import MatchStatus from '../MatchStatus/MatchStatus';
import MatchButton from '../MatchButton/MatchButton';
import { MatchState } from '../../recoil/MatchList';
import { useRecoilValue } from 'recoil';

// const ContestList = ({ label, name, period }: MatchingListProps) => {
const MatchList = () => {
  const navigate = useNavigate();
  const matchList = useRecoilValue(MatchState);

  const handleApplyClick = () => {
    navigate('/competitions/apply'); //
  };

  return (
    <L.ListContainer>
      {matchList.map((contest) => (
        <L.MatchItem key={contest.id}>
          <L.LabelWrap>
            <MatchStatus status={contest.status} label={contest.label} />
          </L.LabelWrap>
          <L.TitleWrap>{contest.name}</L.TitleWrap>
          <L.PeriodWrap>{contest.period}</L.PeriodWrap>
          <L.BtnWrap>
            <MatchButton
              type='small'
              label='신청하기'
              onClick={handleApplyClick}
            />
          </L.BtnWrap>
          <L.BtnWrap>
            <MatchButton
              type='small'
              label='결과 확인'
              onClick={() => {
                /* 온클릭 이벤트 */
              }}
            />
          </L.BtnWrap>
        </L.MatchItem>
      ))}
    </L.ListContainer>
  );
};

export default MatchList;
