import {atom,selector} from 'recoil';
import * as S from './rankingLists'
import * as T from '../CompetitionPage/types'
import { RankingProps } from '../../constants/interfaces';
import { SportsIdSelector } from '../SportsButton';

export const rankignState = atom<RankingProps[]>({
  key: 'rankingState',
  default: []
});

export const dropdownMenuSelector = selector({
  key:'dropdownMenuSelector',
  get : ({get}: any) => {
    const menus = get(S.dropdownMenuState);
    const selectedId  = menus.findIndex((v:T.menuTypes) => v.isSelected);
    return selectedId;
  }
})

export const fetchRankings = selector<RankingProps[]>({
  key : 'fetchRankings',
  get: ({get}:any) => {
    // try {
    //   const res = await fetch('api/rankings');
    //   const data = await res.json();
    //   return data;
    // }catch(error) {
    //   console.error('error ranking',error);
    //   return [];
    // }
    const matchs = get(S.RankingState);
    return matchs;
  }
});

export const matchListSelector = selector({
  key : 'matchListSelector',
  get : ({get}: any) => {
    const selectedId = get(SportsIdSelector);
    const Lists = get(S.RankingState);
    const filterLists = Lists.filter(
      (m: RankingProps) => m.menuId === selectedId
    );
    return filterLists;
  }
})

export const selectedMenuIdState = atom<number>({
  key: 'selectedMenuIdState',
  default : 1,
})