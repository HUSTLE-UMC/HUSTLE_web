import React from 'react';
import * as S from '../Styles';
import MatchTitle from '../MatchTitle/MatchTitle';
import FriendlyMatchList from '../../FriendlyMatchList/FriendlyMatchList';

export const MatchLists = () => {
  return (
    <>
      <MatchTitle label='교류전 구해요!' match />
      <S.ListBox>
        <FriendlyMatchList />
      </S.ListBox>
    </>
  );
};

export default MatchLists;
