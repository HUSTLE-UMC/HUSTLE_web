import { selector } from 'recoil';
import * as S from './states';
import * as T from './types';
import { SportsIdSelector } from '../SportsButton';

// 드롭다운에서 선택한 메뉴 selector
export const dropdownMenuSelector = selector({
  key: 'dropdownMenuSelector',
  get: ({ get }: any) => {
    const menus = get(S.dropdownMenuState);
    const selectedId = menus.findIndex((v: T.menuTypes) => v.isSelected);
    return selectedId;
  }
});

// 사용자가 선택한 교류전 selector
export const matchSelector = selector({
  key: 'matchSelector',
  get: ({ get }: any) => {
    const matchs = get(S.clubListsState);
    const selectedID = get(S.selectedMatchID);
    const selectedMatch = matchs[selectedID];
    return selectedMatch;
  }
});

// 선택된 운동 종목의 교류전 selector
export const matchListsSelector = selector({
  key: 'matchListsSelector',
  get: ({ get }: any) => {
    const selectedID = get(SportsIdSelector);
    const Lists = get(S.clubListsState);
    const filteredLists = Lists.filter(
      (m: T.clubListsTypes) => m.sportId === selectedID
    );
    return filteredLists;
  }
});

// 교류전 신청 페이지의 다른 교류전 목록 selector
export const otherMatchSelector = selector({
  key: 'otherMatchSelector',
  get: ({ get }: any) => {
    const matchs = get(S.clubListsState);
    const selectedMatch = get(matchSelector);
    const result: T.clubListsTypes[] = [];
    matchs.map((m: T.clubListsTypes) => {
      if (m !== selectedMatch) result.push(m);
    });
    return result;
  }
});
