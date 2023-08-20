import { atom, selector } from 'recoil';
import MainCompetition from '../../pages/MainCompetition/MainCompetition';
import { competitionMenuState } from './states';

export interface competitionTypes {
  menuId: number;
  type?: 'Preliminary' | 'Finals';
  label: string;
  selected: boolean;
}

export const PreCompetitionState = atom<competitionTypes[]>({
  key: 'competitionMenuState',
  default: [
    {
      menuId: 0,
      type: 'Preliminary',
      label: '예선',
      selected: false
    },
    {
      menuId: 1,
      type: 'Preliminary',
      label: '본선',
      selected: false
    },
    {
      menuId: 2,
      type: 'Preliminary',
      label: 'C조',
      selected: false
    },
    {
      menuId: 3,
      type: 'Preliminary',
      label: 'D조',
      selected: false
    },
    {
      menuId: 4,
      type: 'Preliminary',
      label: 'E조',
      selected: false
    },
    {
      menuId: 5,
      type: 'Preliminary',
      label: 'F조',
      selected: false
    },
    {
      menuId: 6,
      type: 'Preliminary',
      label: 'G조',
      selected: false
    },
    {
      menuId: 7,
      type: 'Preliminary',
      label: 'H조',
      selected: false
    }
  ]
});

export const MainCompetitionState = atom<competitionTypes[]>({
  key: 'MainCompetition',
  default: [
    {
      menuId: 0,
      type: 'Finals',
      label: '32강',
      selected: false
    },
    {
      menuId: 1,
      type: 'Finals',
      label: '16강',
      selected: false
    },
    {
      menuId: 2,
      type: 'Finals',
      label: '8강',
      selected: false
    },
    {
      menuId: 3,
      type: 'Finals',
      label: '4강',
      selected: false
    },
    {
      menuId: 4,
      type: 'Finals',
      label: '준결승',
      selected: false
    },
    {
      menuId: 5,
      type: 'Finals',
      label: '순위 결정전',
      selected: false
    },
    {
      menuId: 6,
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

//  대회 예선-본선 타입 선택
export const CompetitionTypeSelector = selector({
  key: 'CompetitionTypeSelector',
  get: ({ get }) => {
    const menu = get(competitionMenuState);
    const selectedMenu = menu.find((item) => item.isSelected);
    return selectedMenu ? selectedMenu.type : null;
  }
});

// 현재 선택되어 있는 경기(몇강, 몇강) 정보 Selector(예선용)
export const CompetitionSelector = selector({
  key: 'CompetitionSelector',
  get: ({ get }: any) => {
    const sports = get(PreCompetitionState);
    return sports.filter((v: competitionTypes) => v.selected);
  }
});

// 현재 선택되어 있는 경기 type의 ID Selector(예선용)
export const CompetitionIdSelector = selector({
  key: 'CompetitionIdSelector',
  get: ({ get }: any) => {
    const sports = get(PreCompetitionState);
    return sports.findIndex((v: competitionTypes) => v.selected);
  }
});
