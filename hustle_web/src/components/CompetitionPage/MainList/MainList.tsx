import React from 'react';
import * as S from './Styles';
import CompetitionMenu from '../CompetitonMenu/CompetitionMenu';
import { useRecoilValue } from 'recoil';
import { listsSelector } from '../../../recoil/CompetitionPage/selectors';
import { CompetitionResultTypes } from '../../../recoil/CompetitionPage/types';
import { sportSelectState } from '../../../recoil/SportsButton';
// import PageButton from '../../PageButton/PageButton';
import CompetitionButton from '../CompetitionButton/CompetitionButton';
import CompetitionTimeTable from '../CompetitionTimeTable/CompetitionTimeTable';

export const MainList = () => {
  const matchs = useRecoilValue(listsSelector);
  const isSelected = useRecoilValue(sportSelectState);
  return (
    <>
      <CompetitionMenu />
      <S.LabelWrap>가톨릭대학교 총장배 대회</S.LabelWrap>
      <CompetitionButton />
      {matchs.map((v: CompetitionResultTypes, i: number) => {
        return (
          <CompetitionTimeTable
            key={i}
            // id={i}
            date={v.date}
            time={v.time}
            matchName={v.matchName}
            team1={v.team1}
            team2={v.team2}
            score={v.score}
          />
        );
      })}
      {isSelected && matchs.length === 0 && (
        <S.TextBox>현재 등록된 교류전이 없습니다.</S.TextBox>
      )}
    </>
  );
};

export default MainList;
