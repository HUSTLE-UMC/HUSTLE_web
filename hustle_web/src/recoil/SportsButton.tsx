import { atom, selector } from "recoil";
import * as I from "../stories/Icons/svg/index";

export interface buttonTypes {
  id: number;
  label: string;
  selected: boolean;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const buttonState = atom<buttonTypes[]>({
  key: "buttonState",
  default: [
    {
      id: 0,
      label: "축구",
      selected: false,
      Icon: I.Soccer,
    },
    {
      id: 1,
      label: "농구",
      selected: false,
      Icon: I.BasketBall,
    },
    {
      id: 2,
      label: "야구",
      selected: false,
      Icon: I.BaseBall,
    },
    {
      id: 3,
      label: "배구",
      selected: false,
      Icon: I.VolleyBall,
    },
    {
      id: 4,
      label: "테니스",
      selected: false,
      Icon: I.Tennis,
    },
    {
      id: 5,
      label: "탁구",
      selected: false,
      Icon: I.TableTennis,
    },
    {
      id: 6,
      label: "풋살",
      selected: false,
      Icon: I.FootBall,
    },
    {
      id: 7,
      label: "기타종목",
      selected: false,
      Icon: I.Etc,
    },
  ],
});

//현재 선택되어 있는 버튼 정보 가져오는 selector
export const ButtonSelector = selector({
  key: "selectedButtonSelector",
  get: ({ get }: any) => {
    const buttons = get(buttonState);
    const selectedButton = buttons.filter((v: buttonTypes) => v.selected);
    return selectedButton;
  },
});
