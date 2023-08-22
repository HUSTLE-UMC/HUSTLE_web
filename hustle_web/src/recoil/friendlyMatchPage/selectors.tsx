import { selector } from 'recoil';
import * as S from './states';
import * as T from './types';
import { SportsIdSelector, sportSelectState } from '../SportsButton';

// 교류전 상대 구해요 vs 초청해주세요 중 선택된 메뉴 selector
export const friendlyMenuSelector = selector({
  key: 'friendlyMenuSelector',
  get: ({ get }: any) => {
    const menus = get(S.friendlyMenuState);
    const selectedId = menus.findIndex((v: T.menuTypes) => v.isSelected);
    return selectedId;
  }
});

// 사용자가 선택한 교류전 selector
export const friendlyListsSelector = selector({
  key: 'friendlyListsistsSelector',
  get: ({ get }: any) => {
    const menu = get(friendlyMenuSelector);
    let matchs = [];
    const isSportSelected = get(sportSelectState);
    {
      isSportSelected
        ? menu === 0
          ? (matchs = get(matchListsSelector))
          : (matchs = get(invitationListsSelector))
        : (matchs = get(S.matchListsState));
    }
    return matchs;
  }
});

// 교류전 상세보기에 뜰 match
export const matchSelector = selector({
  key: 'matchSelector',
  get: ({ get }: any) => {
    const list = get(friendlyListsSelector);
    const selectedID = get(S.selectedMatchID);
    const selectedList = list[selectedID];
    return selectedList;
  }
});

// 선택된 운동 종목의 교류전 목록 selector
export const matchListsSelector = selector({
  key: 'matchListsSelector',
  get: ({ get }: any) => {
    const selectedID = get(SportsIdSelector);
    const Lists = get(S.matchListsState);
    const filteredLists = Lists.filter(
      (m: T.matchListsTypes) => m.sportEvent.id === selectedID
    );
    return filteredLists;
  }
});

// 선택된 운동 종목의 초청해주세요 목록 selector
export const invitationListsSelector = selector({
  key: 'invitationListsSelector',
  get: ({ get }: any) => {
    const selectedID = get(SportsIdSelector);
    const Lists = get(S.invitationListsState);
    const filteredLists = Lists.filter(
      (m: T.invitationListsTypes) => m.sportId === selectedID
    );
    return filteredLists;
  }
});

// 교류전, 초청 리스트 선택된 페이지 번호 seletor
export const pageNumberSelector = selector({
  key: 'pageNumberSelector',
  get: ({ get }: any) => {
    const page = get(S.pageNumberState);
    const selectedIndex = page.findIndex(
      (v: T.pageNumberTypes) => v.isSelected == true
    );
    return selectedIndex + 1;
  }
});

// 특정 페이지에 보여질 리스트 selector
export const pageListSelector = selector({
  key: 'pageListSelector',
  get: ({ get }: any) => {
    const page = get(pageNumberSelector);
    const list = get(friendlyListsSelector);
    const filteredList = list.filter(
      (v: T.matchListsTypes) => page * 10 > v.id && v.id > (page - 1) * 10
    );
    return filteredList;
  }
});
