import * as S from './Styles';
import PreList from '../PreList/PreList';
import MainList from '../MainList/MainList';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { competitionMenuSelector } from '../../../recoil/CompetitionPage/selectors';
import {
  sportSelectState,
  sportsMenuState
} from '../../../recoil/SportsButton';
import { pageNumberState } from '../../../recoil/friendlyMatchPage/states';
import { useEffect } from 'react';

export const CompetitionResult = () => {
  const selectedMenu = useRecoilValue(competitionMenuSelector);
  const resetSportMenu = useResetRecoilState(sportsMenuState);
  const resetSportSelect = useResetRecoilState(sportSelectState);
  const resetPageSelect = useResetRecoilState(pageNumberState);
  useEffect(() => {
    resetSportMenu();
    resetSportSelect();
  }, []);
  useEffect(() => {
    resetPageSelect();
  }, [selectedMenu]);
  return (
    <>
      <S.Layout>{selectedMenu === 0 ? <PreList /> : <MainList />}</S.Layout>
    </>
  );
};

export default CompetitionResult;
