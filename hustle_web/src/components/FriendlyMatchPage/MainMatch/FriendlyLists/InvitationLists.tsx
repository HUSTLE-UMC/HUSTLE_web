import React from 'react';
import * as S from '../Styles';
import MatchMenu from '../../MatchMenu/MatchMenu';
import FriendlyMatchList from '../../FriendlyMatchList/FriendlyMatchList';
import { useRecoilValue } from 'recoil';
import { friendlyListsSelector } from '../../../../recoil/friendlyMatchPage/selectors';
import { sportSelectState } from '../../../../recoil/SportsButton';
import { matchListsTypes } from '../../../../recoil/friendlyMatchPage/types';
import PageButton from '../../PageButton/PageButton';

export const InvitationLists = () => {
  const matchs = useRecoilValue(friendlyListsSelector);
  const isSelected = useRecoilValue(sportSelectState);

  return (
    <>
      <MatchMenu />
      {matchs.map((v: matchListsTypes, i: number) => {
        return (
          <FriendlyMatchList
            key={i}
            id={i}
            sport={v.sport}
            title={v.title}
            date={v.date}
            location={v.location}
            clubName={v.clubName}
          />
        );
      })}
      {isSelected && matchs.length === 0 && (
        <S.TextBox>현재 등록된 교류전이 없습니다.</S.TextBox>
      )}
      <PageButton />
    </>
  );
};

export default InvitationLists;
