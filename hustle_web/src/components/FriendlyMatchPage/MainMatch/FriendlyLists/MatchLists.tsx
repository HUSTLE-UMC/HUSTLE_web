import React from 'react';
import * as S from '../Styles';
import MatchTitle from '../MatchTitle/MatchTitle';
import FriendlyMatchList from '../../FriendlyMatchList/FriendlyMatchList';
import { useRecoilValue } from 'recoil';
import { clubListsState } from '../../../../recoil/friendlyMatchPage/states';
import image from '../../../../assets/images/TempLogo.png';
import { matchListsSelector } from '../../../../recoil/friendlyMatchPage/selectors';
import { clubListsTypes } from '../../../../recoil/friendlyMatchPage/types';
import { sportSelectState } from '../../../../recoil/SportsButton';

export const MatchLists = () => {
  const clubs = useRecoilValue(clubListsState);
  const filteredmatchs = useRecoilValue(matchListsSelector);
  const isSelected = useRecoilValue(sportSelectState);
  let matchs;
  isSelected ? (matchs = filteredmatchs) : (matchs = clubs);
  return (
    <>
      <MatchTitle label='교류전 구해요!' />
      <S.ListBox>
        {matchs.map((v: clubListsTypes, i: number) => {
          return (
            <FriendlyMatchList
              key={i}
              id={i}
              img={image}
              sport={v.sport}
              title={v.title}
              date={v.date}
              location={v.location}
            />
          );
        })}
      </S.ListBox>
      {isSelected && matchs.length === 0 && (
        <S.TextBox>현재 등록된 교류전이 없습니다.</S.TextBox>
      )}
    </>
  );
};

export default MatchLists;
