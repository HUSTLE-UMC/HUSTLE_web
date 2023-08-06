import { atom } from 'recoil';
import * as T from './types';

export const CompetitionState = atom<T.CompetitionTypes[]>({
  key: 'CompetitionState',
  default: [
    {
      id: 0,
      img: '',
      sort: '대회',
      title: '가톨릭대학교 총장배 대회',
      location: '경기대학교 수원캠퍼스 체육관',
      date: '2023.8.13 - 2023.8.20'
    },
    {
      id: 1,
      img: '',
      sort: '대회',
      title: '가톨릭대학교 총장배 대회',
      location: '경기대학교 수원캠퍼스 체육관',
      date: '2023.8.13 - 2023.8.20'
    },
    {
      id: 2,
      img: '',
      sort: '대회',
      title: '가톨릭대학교 총장배 대회',
      location: '경기대학교 수원캠퍼스 체육관',
      date: '2023.8.13 - 2023.8.20'
    },
    {
      id: 3,
      img: '',
      sort: '대회',
      title: '가톨릭대학교 총장배 대회',
      location: '경기대학교 수원캠퍼스 체육관',
      date: '2023.8.13 - 2023.8.20'
    },
    {
      id: 4,
      img: '',
      sort: '대회',
      title: '가톨릭대학교 총장배 대회',
      location: '경기대학교 수원캠퍼스 체육관',
      date: '2023.8.13 - 2023.8.20'
    }
  ]
});
