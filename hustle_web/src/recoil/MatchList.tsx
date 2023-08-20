import { atom, selector } from 'recoil';

export interface MatchTypes {
  id: number;
  status: 'before' | 'applying' | 'ongoing' | 'finish';
  label: string;
  name: string;
  period: string;
}

export const MatchState = atom<MatchTypes[]>({
  key: 'MatchState',
  default: [
    {
      id: 0,
      status: 'applying',
      label: '모집 중',
      name: '가톨릭대학교 총장배 대회',
      period: '2023.08.13 - 2023.08.20'
    },
    {
      id: 1,
      status: 'before',
      label: '모집 예정',
      name: '가톨릭대학교 총장배 대회',
      period: '2023.08.13 - 2023.08.20'
    },
    {
      id: 2,
      status: 'ongoing',
      label: '진행 중',
      name: '가톨릭대학교 총장배 대회',
      period: '2023.08.13 - 2023.08.20'
    },
    {
      id: 3,
      status: 'finish',
      label: '종료',
      name: '가톨릭대학교 총장배 대회',
      period: '2023.08.13 - 2023.08.20'
    }
  ]
});

// export const sportSelectState = atom<boolean>({
//   key: 'sportSelectState',
//   default: false
// });
//
// // 현재 선택되어 있는 운동종목 정보 Selector
// export const SportsSelector = selector({
//   key: 'SportsSelector',
//   get: ({ get }: any) => {
//     const sports = get(sportsMenuState);
//     const selectedSports = sports.filter((v: sportsTypes) => v.selected);
//     return selectedSports;
//   }
// });
//
// // 현재 선택되어 있는 종목의 ID Selector
// export const SportsIdSelector = selector({
//   key: 'SportsIdSelector',
//   get: ({ get }: any) => {
//     const sports = get(sportsMenuState);
//     const selectedId = sports.findIndex((v: sportsTypes) => v.selected);
//     return selectedId;
//   }
// });
