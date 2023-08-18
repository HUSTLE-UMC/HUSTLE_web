import * as S from './Styles';
import MatchLists from './FriendlyLists/MatchLists';
import InvitationLists from './FriendlyLists/InvitationLists';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { friendlyMenuSelector } from '../../../recoil/friendlyMatchPage/selectors';
import {
  sportSelectState,
  sportsMenuState
} from '../../../recoil/SportsButton';
import { pageNumberState } from '../../../recoil/friendlyMatchPage/states';
import { useEffect } from 'react';

export const MainMatch = () => {
  const selectedMenu = useRecoilValue(friendlyMenuSelector);
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
      <S.Layout>
        {selectedMenu === 0 ? <MatchLists /> : <InvitationLists />}
      </S.Layout>
    </>
  );
};

export default MainMatch;
