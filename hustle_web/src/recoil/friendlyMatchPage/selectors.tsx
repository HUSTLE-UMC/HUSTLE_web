import { selector } from 'recoil';
import * as S from './states';
import * as T from './types';

// 드롭다운에서 선택한 메뉴 selector
export const dropdownMenuSelector = selector({
  key: 'dropdownMenuSelector',
  get: ({ get }: any) => {
    const menus = get(S.menuState);
    const selectedId = menus.findIndex((v: T.menuTypes) => v.isSelected);
    return selectedId;
  }
});

// 초청완료, 요청완료 페이지에서 캐릭터 말풍선에 뜰 문구 selector
export const submitMsgSelector = selector({
  key: 'sumbitMsgSelector',
  get: ({ get }: any) => {
    const types = get(S.submitTypeState);
    const submittedId = types.findIndex((v: T.submitTypes) => v.isSubmitted);
    const submitMsg = types[submittedId].msg;
    return submitMsg;
  }
});
