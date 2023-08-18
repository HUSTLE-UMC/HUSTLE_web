import {atom} from 'recoil'
import {RankingProps} from '../../constants/interfaces'
import * as T from '../CompetitionPage/types';

export const dropdownMenuState = atom<T.menuTypes[]>({
  key : 'dropdownMenuState',
  default : [
    {id : 0, label: '가톨릭대 총장배', isSelected : false},
    {id : 1, label: '국민대 총장배', isSelected : false},
    {id : 2, label: '성공회대 총장배', isSelected : false},
    {id : 3, label: '인천대 총장배', isSelected : false},
  ]
})

export const RankingState = atom<RankingProps[]>({
  key : 'rankingListsState',
  default: [
    {
      id : 0,
      rank : '1위',
      teamname : '바스타즈',
      matchesNumber : 5,
      win : 5,
      undefeat : 0,
      defeat : 0
    },
    {
      id : 0,
      rank : '2위',
      teamname : '리버스',
      matchesNumber : 5,
      win : 4,
      undefeat : 0,
      defeat : 1
    },
    {
      id : 0,
      rank : '3위',
      teamname : '가로채기',
      matchesNumber : 5,
      win : 3,
      undefeat : 1,
      defeat : 1
    },
    {
      id : 0,
      rank : '4위',
      teamname : '바스타즈',
      matchesNumber : 5,
      win : 2,
      undefeat : 2,
      defeat : 1
    },
    {
      id : 4,
      rank : '5위',
      teamname : '바스타즈',
      matchesNumber : 5,
      win : 1,
      undefeat : 2,
      defeat : 2
    },
    {
      id : 5,
      rank : '6위',
      teamname : '바스타즈',
      matchesNumber : 5,
      win : 0,
      undefeat : 0,
      defeat : 5
    },
    {
      id : 6,
      rank : '6위',
      teamname : '바스타즈',
      matchesNumber : 5,
      win : 0,
      undefeat : 0,
      defeat : 5
    },
    {
      id : 7,
      rank : '6위',
      teamname : '바스타즈',
      matchesNumber : 5,
      win : 0,
      undefeat : 0,
      defeat : 5
    },
    {
      id : 8,
      rank : '6위',
      teamname : '바스타즈',
      matchesNumber : 5,
      win : 0,
      undefeat : 0,
      defeat : 5
    },
    {
      id : 9,
      rank : '6위',
      teamname : '바스타즈',
      matchesNumber : 5,
      win : 0,
      undefeat : 0,
      defeat : 5
    }
  ]
})