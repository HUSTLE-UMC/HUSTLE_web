import React from 'react';
import * as S from '../Styles';
import MatchTitle from '../MatchTitle/MatchTitle';
import FriendlyMatchList from '../../FriendlyMatchList/FriendlyMatchList';

export const InvitationLists = () => {
  return (
    <>
      <MatchTitle label='초청해주세요!' />
      <S.ListBox>
        <FriendlyMatchList />
      </S.ListBox>
    </>
  );
};

export default InvitationLists;
