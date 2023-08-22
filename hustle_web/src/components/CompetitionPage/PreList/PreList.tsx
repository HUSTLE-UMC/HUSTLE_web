import React from 'react';
import * as S from './Styles';
import CompetitionMenu from '../CompetitonMenu/CompetitionMenu';
import { useRecoilValue } from 'recoil';
import { listsSelector } from '../../../recoil/CompetitionPage/selectors';
import { CompetitionResultTypes } from '../../../recoil/CompetitionPage/types';
// import PageButton from '../../PageButton/PageButton';
import CompetitionButton from '../CompetitionButton/PreCompetitionButton';
import CompetitionTimeTable from '../CompetitionTimeTable/CompetitionTimeTable';

export const PreList = () => {
  const matchs = useRecoilValue(listsSelector);
  return (
    <>
      <CompetitionMenu />
      <S.LabelWrap>가톨릭대학교 총장배 대회</S.LabelWrap>
      <CompetitionButton />
      {matchs.map((v: CompetitionResultTypes, i: number) => {
        return (
          <CompetitionTimeTable
            key={i}
            date={v.date}
            time={v.time}
            matchName={v.matchName}
            team1={v.team1}
            team2={v.team2}
            score={v.score}
          />
        );
      })}
    </>
  );
};

export default PreList;
