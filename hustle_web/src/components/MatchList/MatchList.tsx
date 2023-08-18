import React from 'react';
import * as L from './Styles';
import { useNavigate } from 'react-router-dom';
import MatchStatus from '../MatchStatus/MatchStatus';
import MatchButton from '../MatchButton/MatchButton';

interface MatchingListProps {
  contests: Contest[];
}
const ContestList: React.FC<MatchingListProps> = ({ contests }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/competitions/apply'); //
  };

  return (
    <L.ListContainer>
      {contests.map((contest, index) => (
        <L.MatchItem key={index}>
          <L.LabelWrap>
            <MatchStatus status={contest.label} label={contest.label} />
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

export default ContestList;
