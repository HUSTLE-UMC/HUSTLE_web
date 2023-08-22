import { atom, selector } from 'recoil';

export interface MatchTypes {
  id: number;
  competitionState: 'BEFORE' | 'RECRUITING' | 'ACTIVE' | 'COMPLETE';
  title: string;
  host: string;
  place: string;
  postUrl: string;
  startDate: string;
  endDate: string;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  entryFee: number;
  maxEntryCount: number;
  entryCount: number;
  posterUrl: string;
  preRoundGroupCount: number;
  finalRoundTeamCount: number;
  sponsor: string;
  contacts: Contact[];
}

export interface Contact {
  id: number;
  name: string;
  phoneNumber: string;
}

export const MatchState = atom<MatchTypes[]>({
  key: 'MatchState',
  default: []
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
