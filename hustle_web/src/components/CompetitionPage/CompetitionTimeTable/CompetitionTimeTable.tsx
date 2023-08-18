// import React from 'react';
// import * as S from './Styles';
// import CompetitionMenu from '../CompetitionMenu/CompetitionMenu';
// import FriendlyMatchList from '../../FriendlyMatchList/FriendlyMatchList';
// import { useRecoilValue } from 'recoil';
// import { listsSelector } from '../../../../recoil/friendlyMatchPage/selectors';
// import { matchListsTypes } from '../../../../recoil/friendlyMatchPage/types';
// import { sportSelectState } from '../../../../recoil/SportsButton';
// import PageButton from '../../PageButton/PageButton';
//
export const CompetitionTimeTable = () => {
  //   const matchs = useRecoilValue(listsSelector);
  //   const isSelected = useRecoilValue(sportSelectState);
  //   return (
  //     <>
  //       <CompetitionMenu />
  //       {matchs.map((v: matchListsTypes, i: number) => {
  //         return (
  //           <FriendlyMatchList
  //             key={i}
  //             id={i}
  //             sport={v.sport}
  //             title={v.title}
  //             date={v.date}
  //             location={v.location}
  //             clubName={v.clubName}
  //           />
  //         );
  //       })}
  //       {isSelected && matchs.length === 0 && (
  //         <S.TextBox>현재 등록된 교류전이 없습니다.</S.TextBox>
  //       )}
  //       <PageButton />
  //     </>
  //   );
};
//
export default CompetitionTimeTable;
