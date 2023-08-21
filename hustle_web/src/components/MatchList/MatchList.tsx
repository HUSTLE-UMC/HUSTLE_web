import React, { useEffect } from 'react';
import * as L from './Styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MatchStatus from '../MatchStatus/MatchStatus';
import MatchButton from '../MatchButton/MatchButton';
import { MatchState } from '../../recoil/MatchList';
import { useRecoilState } from 'recoil';

const MatchList = () => {
  const navigate = useNavigate();
  const [matchList, setMatchList] = useRecoilState(MatchState);

  useEffect(() => {
    axios
      .get('https://api.sport-hustle.com/api/competition', {
        params: {
          pageable: {}
          // 파라미터
        },
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZTQxMTIzMjMyQGdtYWlsLmNvbSIsImlhdCI6MTY5MjY0MjUxNiwidHlwZSI6IkFDQ0VTU19UT0tFTiIsImV4cCI6MTY5MjY0NDMxNn0.GQH42KkeFZUJuqI2SIibgVmfpUndAOS9MAmxLXKm7Rc'}`
        }
      })
      .then((response) => {
        console.log(response.data);
        setMatchList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleApplyClick = () => {
    navigate('/competitions/apply');
  };

  const handleResultClick = () => {
    navigate('/competitions/result');
  };

  return (
    <L.ListContainer>
      {matchList.map((contest) => (
        <L.MatchItem key={contest.id}>
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
              onClick={handleApplyClick}
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
