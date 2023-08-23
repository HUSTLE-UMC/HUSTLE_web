import React from 'react';
import * as S from '../Styles';
import MatchMenu from '../../MatchMenu/MatchMenu';
import FriendlyMatchList from '../../FriendlyMatchList/FriendlyMatchList';
import { useRecoilValue } from 'recoil';
import { pageListSelector } from '../../../../recoil/friendlyMatchPage/selectors';
import { sportSelectState } from '../../../../recoil/SportsButton';
import { matchListsTypes } from '../../../../recoil/friendlyMatchPage/types';
import PageButton from '../../PageButton/PageButton';

export const InvitationLists = () => {
  const matchs = useRecoilValue(pageListSelector);
  const isSelected = useRecoilValue(sportSelectState);

  return (
    <>
      <MatchMenu />
      {matchs.map((v: matchListsTypes) => {
        return (
          <FriendlyMatchList
            key={v.id}
            id={v.id}
            sport={v.sportEvent.name}
            title={v.title}
            date={`${v.startDate.substring(0, 10)}`}
            location={v.locationAddress}
            clubName={v.club.name}
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
