import { selector } from 'recoil';
import * as S from './states';
import * as T from './types';
import { sportSelectState } from '../SportsButton';
import {
  friendlyMenuSelector,
  invitationListsSelector,
  matchListsSelector
} from '../friendlyMatchPage/selectors';

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
          ? (matchs = get(matchListsSelector))
          : (matchs = get(invitationListsSelector))
        : menu === 0
        ? (matchs = get(S.CompetitionState))
        : //   33번줄 바꿔야함 임시로 해결
          (matchs = get(S.CompetitionState));
    }
    return matchs;
  }
});
