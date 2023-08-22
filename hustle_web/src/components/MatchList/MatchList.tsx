import React, { useEffect } from 'react';
import * as L from './Styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MatchStatus from '../MatchStatus/MatchStatus';
import MatchButton from '../MatchButton/MatchButton';
import { MatchState } from '../../recoil/MatchList';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const MatchList = () => {
  const navigate = useNavigate();
  const setMatchState = useSetRecoilState(MatchState);
  const matchList = useRecoilValue(MatchState);
  useEffect(() => {
    axios
      .get('https://api.sport-hustle.com/api/competition', {
        params: {
          pageable: {}
          // 파라미터
        },
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0NjY2MjM0QGdvb2dsZS5jb20iLCJpYXQiOjE2OTI3MjU0NTEsInR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJleHAiOjE2OTI3MjcyNTF9.UoTTDsImrjyYRqpZ9WW9QvvN0Zik1S3IkDgTQxJC0po'}`
        }
      })
      .then((response) => {
        console.log('데이턴', response.data);
        setMatchState(response.data.data);
        console.log('데이턴', response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [setMatchState]);

  const handleApplyClick = (competitionId: number) => {
    console.log('competitionId:', competitionId);
    navigate(`/competitions/apply/${competitionId}`);
  };

  const handleResultClick = () => {
    navigate('/competitions/result');
  };
  return (
    <L.ListContainer>
      {matchList.map((contest, index) => (
        <L.MatchItem key={index}>
          <L.LabelWrap>
            <MatchStatus status={contest.competitionState} />
          </L.LabelWrap>
          <L.TitleWrap>{contest.title}</L.TitleWrap>
          <L.PeriodWrap>
            {contest.startDate.substring(0, 10)} -{' '}
            {contest.endDate.substring(0, 10)}
          </L.PeriodWrap>
          <L.BtnWrap>
            <MatchButton
              type='small'
              label='신청하기'
              onClick={() => handleApplyClick(contest.id)}
            />
          </L.BtnWrap>
          <L.BtnWrap>
            <MatchButton
              type='small'
              label='결과 확인'
              onClick={handleResultClick}
            />
          </L.BtnWrap>
        </L.MatchItem>
      ))}
    </L.ListContainer>
  );
};

export default MatchList;
