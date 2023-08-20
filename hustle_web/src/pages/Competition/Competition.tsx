import React from 'react';
import * as S from './Styles';
import MatchList from '../../components/MatchList/MatchList';
import SportsMenu from '../../components/SportsMenu/SportsMenu';
// import { MatchState } from '../../recoil/MatchList';
// import { useRecoilValue } from 'recoil';
const Competition = () => {
  return (
    <S.HomeContainer>
      <SportsMenu />
      <S.SortWrap>
        <S.LabelBox>구분</S.LabelBox>
        <S.TitleBox>대회명</S.TitleBox>
        <S.PeriodBox>대회 기간</S.PeriodBox>
        <S.BtnBox>신청</S.BtnBox>
        <S.BtnBox>결과</S.BtnBox>
      </S.SortWrap>
      <MatchList />
    </S.HomeContainer>
  );
};

export default Competition;
