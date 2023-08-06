import React from 'react';
import * as S from '../Styles';
import MatchTitle from '../MatchTitle/MatchTitle';
import FriendlyMatchList from '../../FriendlyMatchList/FriendlyMatchList';
import { useRecoilValue } from 'recoil';
import { clubListsState } from '../../../../recoil/friendlyMatchPage/states';
import image from '../../../../assets/images/TempLogo.png';

export const MatchLists = () => {
  const clubs = useRecoilValue(clubListsState);
  return (
    <>
      <MatchTitle label='교류전 구해요!' match />
      <S.ListBox>
        {clubs.map((v) => {
          return (
            <FriendlyMatchList
              key={v.id}
              id={v.id}
              img={image}
              sport={v.sport}
              title={v.title}
              date={v.date}
              location={v.location}
            />
          );
        })}
      </S.ListBox>
    </>
  );
};

export default MatchLists;
