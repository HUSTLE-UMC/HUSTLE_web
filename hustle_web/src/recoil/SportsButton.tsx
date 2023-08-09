import { atom, selector } from 'recoil';

export interface buttonTypes {
  id: number;
  label: string;
  selected: boolean;
}

export const buttonState = atom<buttonTypes[]>({
  key: 'buttonState',
  default: [
    {
      id: 0,
      label: '축구',
      selected: false,
    },
    {
      id: 1,
      label: '농구',
      selected: false,
    },
    {
      id: 2,
      label: '야구',
      selected: false,
    },
    {
      id: 3,
      label: '배구',
      selected: false,
    },
    {
      id: 4,
      label: '테니스',
      selected: false,
    },
    {
      id: 5,
      label: '탁구',
      selected: false,
    },
    {
      id: 6,
      label: '풋살',
      selected: false,
    },
    {
      id: 7,
      label: '더보기',
      selected: false,
    },
  ],
});

//현재 선택되어 있는 버튼 정보 가져오는 selector
export const ButtonSelector = selector({
  key: 'ButtonSelector',
  get: ({ get }: any) => {
    const buttons = get(buttonState);
    const selectedButton = buttons.filter((v: buttonTypes) => v.selected);
    return selectedButton;
  },
});
