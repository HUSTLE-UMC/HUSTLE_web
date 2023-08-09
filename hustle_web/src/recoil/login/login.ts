import { atom } from 'recoil';

// 사용자 정보를 저장하는 Recoil atom 생성
export const userAtom = atom({
  key: 'userAtom', // 고유한 키값
  default: {} // 기본 값 (비어있는 객체로 초기화)
});

export const newUserAtom = atom({
  key: 'newuserAtom',
  default: {}
});
