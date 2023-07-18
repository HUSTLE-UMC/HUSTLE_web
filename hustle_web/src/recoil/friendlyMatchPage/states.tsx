import { atom } from "recoil";
import * as T from "./types";

export const menuState = atom<T.menuTypes[]>({
  key: "menuState",
  default: [
    { id: 0, label: "교류전 요청", isSelected: false },
    { id: 1, label: "초청 요청", isSelected: false },
  ],
});

export const submitTypeState = atom<T.submitTypes[]>({
  key: "submitTypeState",
  default: [
    { id: 0, msg: "요청이 완료되었습니다\r!", isSubmitted: true },
    { id: 1, msg: "초청이 완료되었습니다\r!", isSubmitted: false },
  ],
});

export const selectedState = atom<boolean>({
  key: "selectedState",
  default: false,
});
