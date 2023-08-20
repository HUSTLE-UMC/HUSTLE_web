import { atom } from 'recoil';
import * as T from './types';

export const competitionMenuState = atom<T.menuTypes[]>({
  key: 'competitionMenuState',
  default: [
    { id: 0, label: '예선', isSelected: true },
    { id: 1, label: '본선', isSelected: false }
  ]
});

export const competitionSortState = atom<T.sortTypes[]>({
  key: 'competitionMenuState',
  default: [
    { id: 0, sort: '예선', label: 'A조' },
    { id: 1, sort: '예선', label: 'B조' },
    { id: 2, sort: '예선', label: 'C조' },
    { id: 3, sort: '예선', label: 'D조' },
    { id: 4, sort: '예선', label: 'E조' },
    { id: 5, sort: '예선', label: 'F조' },
    { id: 6, sort: '예선', label: 'G조' },
    { id: 7, sort: '예선', label: 'H조' },
    { id: 8, sort: '본선', label: '32강' },
    { id: 9, sort: '본선', label: '16강' },
    { id: 10, sort: '본선', label: '8강' },
    { id: 11, sort: '본선', label: '4강' },
    { id: 12, sort: '본선', label: '준결승' },
    { id: 13, sort: '본선', label: '순위 결정전' },
    { id: 14, sort: '본선', label: '결승' }
  ]
});

// export const ScoreResult = atom<T.scoreTypes[]>({
//   key: 'ScoreResult',
//   default: [
//     {
//       sportId: 0,
//       id: 0,
//       date: '7월 19일 (토)',
//       time: '17:00',
//       matchName: 'A조 1경기',
//       team1: '바스타즈',
//       team2: '바스타즈',
//       score: '43: 19'
//     },
//     {
//       sportId: 1,
//       id: 1,
//       date: '7월 19일 (토)',
//       time: '17:00',
//       matchName: 'A조 1경기',
//       team1: '바스타즈',
//       team2: '바스타즈',
//       score: '43: 19'
//     },
//     {
//       sportId: 2,
//       id: 2,
//       date: '7월 19일 (토)',
//       time: '17:00',
//       matchName: 'A조 1경기',
//       team1: '바스타즈',
//       team2: '바스타즈',
//       score: '43: 19'
//     }
//   ]
// });

export const CompetitionResult = atom<T.CompetitionResultTypes[]>({
  key: 'CompetitionResult',
  default: [
    {
      sportId: 0,
      sortId: 0,
      id: 0,
      date: '7월 19일 (토)',
      time: '17:00',
      matchName: 'A조 1경기',
      team1: '바스타즈',
      team2: '바스타즈',
      score: '43: 19'
    },
    {
      sportId: 1,
      sortId: 0,
      id: 1,
      date: '7월 19일 (토)',
      time: '17:00',
      matchName: 'A조 1경기',
      team1: '바스타즈',
      team2: '바스타즈',
      score: '43: 19'
    },
    {
      sportId: 2,
      sortId: 0,
      id: 2,
      date: '7월 19일 (토)',
      time: '17:00',
      matchName: 'A조 1경기',
      team1: '바스타즈',
      team2: '바스타즈',
      score: '43: 19'
    }
  ]
});

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
    },
    {
      id: 5,
      img: '',
      sort: '대회',
      title: '국민대학교 총장배 대회',
      location: '경기대학교 수원캠퍼스 체육관',
      date: '2023.8.13 - 2023.8.20'
    },
    {
      id: 6,
      img: '',
      sort: '대회',
      title: '인천대학교 총장배 대회',
      location: '경기대학교 수원캠퍼스 체육관',
      date: '2023.8.13 - 2023.8.20'
    },
    {
      id: 7,
      img: '',
      sort: '대회',
      title: '국민대학교 총장배 대회',
      location: '경기대학교 수원캠퍼스 체육관',
      date: '2023.8.13 - 2023.8.20'
    }
  ]
});

export const selectedCompetitionId = atom<number>({
  key: 'selectedCompetitonId',
  default: 0
});
