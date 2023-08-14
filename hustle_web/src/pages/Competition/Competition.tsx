import React from 'react';
import * as S from './Styles';
import MatchList from '../../components/MatchList/MatchList';
const CompetitionPage = () => {
  const contests = [
    {
      label: '모집 중',
      name: '대회 A',
      period: '2023-08-01 ~ 2023-08-15'
    },
    {
      label: '진행 중',
      name: '대회 B',
      period: '2023-08-10 ~ 2023-08-20'
    }
  ];
  return (
    <S.HomeContainer>
      <S.SortWrap>
        <S.LabelBox>구분</S.LabelBox>
        <S.TitleBox>대회명</S.TitleBox>
        <S.PeriodBox>대회 기간</S.PeriodBox>
        <S.BtnBox>신청</S.BtnBox>
        <S.BtnBox>결과</S.BtnBox>
      </S.SortWrap>
      <MatchList contests={contests} />
    </S.HomeContainer>
  );
};

export default CompetitionPage;
