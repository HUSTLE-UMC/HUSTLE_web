import { selector } from 'recoil';
import * as S from './states';
import * as T from './types';
import { SportsIdSelector } from '../SportsButton';
import { CompetitionIdSelector } from './CompetitionButton';

// 예선 or 본선 selector
export const competitionMenuSelector = selector({
  key: 'competitionMenuSelector',
  get: ({ get }: any) => {
    const menus = get(S.competitionMenuState);
    const selectedId = menus.findIndex(
      (v: T.CompetitionMenuTypes) => v.isSelected
    );
    return selectedId;
  }
});

// 대회 관련 리스트
export const listsSelector = selector({
  key: 'listsSelector',
  get: ({ get }: any) => {
    const ID = get(competitionMenuSelector);
    let matchs = [];
    ID === 0 ? (matchs = get(PreSelector)) : (matchs = get(MainSelector));
    return matchs;
  }
});

// 예선 리스트 출력 로직 (A조 부터)
export const PreSelector = selector({
  key: 'PreSelector',
  get: ({ get }: any) => {
    const Lists = get(S.CompetitionResult);
    return Lists;
  }
});

// 본선 리스트 출력 로직(32강 부터)
export const MainSelector = selector({
  key: 'MainSelector',
  get: ({ get }: any) => {
    // 일단 같은 리스트 쓰는데 api 보고 바꿔야할듯
    const Lists = get(S.CompetitionResult);
    return Lists;
  }
});
