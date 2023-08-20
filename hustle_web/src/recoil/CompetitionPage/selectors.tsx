import { selector } from 'recoil';
import * as S from './states';
import * as T from './types';
import { sportSelectState, SportsIdSelector } from '../SportsButton';
import {
  friendlyMenuSelector,
  invitationListsSelector,
  matchListsSelector
} from '../friendlyMatchPage/selectors';
import { CompetitionIdSelector } from './CompetitionButton';
import { CompetitionResult } from './states';

// 예선 or 본선 selector
export const competitionMenuSelector = selector({
  key: 'competitionMenuSelector',
  get: ({ get }: any) => {
    const menus = get(S.competitionMenuState);
    return menus.findIndex((v: T.menuTypes) => v.isSelected);
  }
});

export const listsSelector = selector({
  key: 'listsSelector',
  get: ({ get }: any) => {
    const menu = get(competitionMenuSelector);
    let matchs = [];
    const isSportSelected = get(sportSelectState);
    {
      isSportSelected
        ? menu === 0
          ? (matchs = get(PreSelector))
          : (matchs = get(MainSelector))
        : menu === 0
        ? //  이 밑으로 보류
          (matchs = get(S.CompetitionState))
        : //   33번줄 바꿔야함 임시로 해결
          (matchs = get(S.CompetitionState));
    }
    return matchs;
  }
});
// 예선 리스트 출력 로직 (A조 부터)
export const PreSelector = selector({
  key: 'PreSelector',
  get: ({ get }: any) => {
    const selectedID = get(SportsIdSelector);
    const sortedID = get(CompetitionIdSelector);
    const Lists = get(S.CompetitionResult);
    const filteredBySport = Lists.filter(
      (m: T.CompetitionResultTypes) => m.sportId === selectedID
    );

    const filteredLists = filteredBySport.filter(
      (m: T.CompetitionResultTypes) => m.sortId === sortedID
    );
    return filteredLists;
  }
});

// 본선 리스트 출력 로직(32강 부터)
export const MainSelector = selector({
  key: 'MainSelector',
  get: ({ get }: any) => {
    const selectedID = get(SportsIdSelector);
    const sortedID = get(CompetitionIdSelector);
    // 일단 같은 리스트 쓰는데 api 보고 바꿔야할듯
    const Lists = get(S.CompetitionResult);
    const filteredBySport = Lists.filter(
      (m: T.CompetitionResultTypes) => m.sportId === selectedID
    );

    const filteredLists = filteredBySport.filter(
      (m: T.CompetitionResultTypes) => m.sortId === sortedID
    );
    return filteredLists;
  }
});
