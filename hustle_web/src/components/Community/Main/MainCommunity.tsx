import React, { useEffect } from 'react';
import * as S from '../../FriendlyMatchPage/MainMatch/Styles';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { communityMenuSelector } from '../../../recoil/community';
import { sportSelectState, sportsMenuState } from '../../../recoil/SportsButton';
import ClubMain from '../Club/ClubMain';
import MatchLists from './MatchList';

const MainCommunity = () => {
  const selectedMenu = useRecoilValue(communityMenuSelector);
  const resetSportMenu = useResetRecoilState(sportsMenuState);
  const resetSportSelect = useResetRecoilState(sportSelectState); 

  useEffect(() => {
    resetSportMenu();
    resetSportSelect();
  }, []);


  return (
    <>
      <S.Layout>
        {selectedMenu === 0 ? <MatchLists/> : <ClubMain/>}
      </S.Layout>
    </>
  )
}

export default MainCommunity;