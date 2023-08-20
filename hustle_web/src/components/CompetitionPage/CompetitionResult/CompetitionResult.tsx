import * as S from './Styles';
import PreList from '../PreList/PreList';
import MainList from '../MainList/MainList';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { competitionMenuSelector } from '../../../recoil/CompetitionPage/selectors';
import {
  sportSelectState,
  sportsMenuState
} from '../../../recoil/SportsButton';
import { useEffect } from 'react';

export const CompetitionResult = () => {
  //  selectedMenu는 예선 본선이다
  const selectedMenu = useRecoilValue(competitionMenuSelector);
  const resetSportMenu = useResetRecoilState(sportsMenuState);
  const resetSportSelect = useResetRecoilState(sportSelectState);
  useEffect(() => {
    resetSportMenu();
    resetSportSelect();
  }, []);
  return (
    <>
      <S.Layout>{selectedMenu === 0 ? <PreList /> : <MainList />}</S.Layout>
    </>
  );
};

export default CompetitionResult;
