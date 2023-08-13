import React from 'react';
import * as S from './Styles';
import { RankListProps } from './RankListProps';

const RankList: React.FC<RankListProps> = ({
  rank,
  logo,
  name,
  matches,
  wins,
  draws,
  losses,
  goalDifference
}) => {
  return (
    <S.ListContainer>
      <S.RankWrap>{rank}</S.RankWrap>
      <S.ImgWrap>
        <img src={logo} alt={`${name} 로고`} />
      </S.ImgWrap>
      <S.NameWrap>{name}</S.NameWrap>
      <S.ContentWrap>{matches}</S.ContentWrap>
      <S.ContentWrap>{wins}</S.ContentWrap>
      <S.ContentWrap>{draws}</S.ContentWrap>
      <S.ContentWrap>{losses}</S.ContentWrap>
      <S.ContentWrap>{goalDifference}</S.ContentWrap>
    </S.ListContainer>
  );
};

export default RankList;
