import { atom, selector } from 'recoil';

export interface competitionTypes {
  id: number;
  type?: 'Preliminary' | 'Finals';
  label: string;
  selected: boolean;
}

export const competitionMenuState = atom<competitionTypes[]>({
  key: 'sportsMenuState',
  default: [
    {
      id: 0,
      type: 'Preliminary',
      label: 'A조',
      selected: false
    },
    {
      id: 1,
      type: 'Preliminary',
      label: 'B조',
      selected: false
    },
    {
      id: 2,
      type: 'Preliminary',
      label: 'C조',
      selected: false
    },
    {
      id: 3,
      type: 'Preliminary',
      label: 'D조',
      selected: false
    },
    {
      id: 4,
      type: 'Preliminary',
      label: 'E조',
      selected: false
    },
    {
      id: 5,
      type: 'Preliminary',
      label: 'F조',
      selected: false
    },
    {
      id: 6,
      type: 'Preliminary',
      label: 'G조',
      selected: false
    },
    {
      id: 7,
      type: 'Preliminary',
      label: 'H조',
      selected: false
    },
    {
      id: 8,
      type: 'Finals',
      label: '32강',
      selected: false
    },
    {
      id: 9,
      type: 'Finals',
      label: '16강',
      selected: false
    },
    {
      id: 10,
      type: 'Finals',
      label: '8강',
      selected: false
    },
    {
      id: 11,
      type: 'Finals',
      label: '4강',
      selected: false
    },
    {
      id: 12,
      type: 'Finals',
      label: '준결승',
      selected: false
    },
    {
      id: 13,
      type: 'Finals',
      label: '순위 결정전',
      selected: false
    },
    {
      id: 14,
      type: 'Finals',
      label: '결승',
      selected: false
    }
  ]
});

export const competitionSelectState = atom<boolean>({
  key: 'competitionSelectState',
  default: false
});

// 현재 선택되어 있는 경기(몇강, 몇강) 정보 Selector
export const CompetitionSelector = selector({
  key: 'CompetitionSelector',
  get: ({ get }: any) => {
    const sports = get(competitionMenuState);
    return sports.filter((v: competitionTypes) => v.selected);
  }
});

// 현재 선택되어 있는 경기 type의 ID Selector
export const CompetitionIdSelector = selector({
  key: 'SportsIdSelector',
  get: ({ get }: any) => {
    const sports = get(competitionMenuState);
    return sports.findIndex((v: competitionTypes) => v.selected);
  }
});
