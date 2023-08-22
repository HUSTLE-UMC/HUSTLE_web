import { atom, selector } from 'recoil';

export interface sportsTypes {
  id: number;
  label: string;
  selected: boolean;
}

export const sportsMenuState = atom<sportsTypes[]>({
  key: 'sportsMenuState',
  default: [
    {
      id: 1,
      label: '축구',
      selected: false
    },
    {
      id: 2,
      label: '농구',
      selected: false
    },
    {
      id: 3,
      label: '야구',
      selected: false
    },
    {
      id: 4,
      label: '배구',
      selected: false
    },
    {
      id: 5,
      label: '테니스',
      selected: false
    },
    {
      id: 6,
      label: '탁구',
      selected: false
    },
    {
      id: 7,
      label: '풋살',
      selected: false
    },
    {
      id: 8,
      label: '더보기',
      selected: false
    }
  ]
});

export const sportSelectState = atom<boolean>({
  key: 'sportSelectState',
  default: false
});

// 현재 선택되어 있는 운동종목 정보 Selector
export const SportsSelector = selector({
  key: 'SportsSelector',
  get: ({ get }: any) => {
    const sports = get(sportsMenuState);
    const selectedSports = sports.filter((v: sportsTypes) => v.selected);
    return selectedSports;
  }
});

// 현재 선택되어 있는 종목의 ID Selector
export const SportsIdSelector = selector({
  key: 'SportsIdSelector',
  get: ({ get }: any) => {
    const sports = get(sportsMenuState);
    const selectedId = sports.findIndex((v: sportsTypes) => v.selected);
    return selectedId;
  }
});
