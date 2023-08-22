import { atom } from 'recoil';
import * as T from './types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const friendlyMenuState = atom<T.menuTypes[]>({
  key: 'friendlyMenuState',
  default: [
    { id: 0, label: '교류전 상대 구해요', isSelected: true },
    { id: 1, label: '초청해주세요', isSelected: false }
  ]
});

// 교류전 상대 구해요 목록
export const matchListsState = atom<T.matchListsTypes[]>({
  key: 'matchListsState',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

// 초청해주세요 목록
export const invitationListsState = atom<T.invitationListsTypes[]>({
  key: 'invitationListsState',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

// 사용자가 신청하기를 선택한 교류전
export const selectedMatchID = atom<number>({
  key: 'selectedMatchID',
  default: 0
});

// 교류전 페이지 번호
export const pageNumberState = atom<T.pageNumberTypes[]>({
  key: 'pageNumberState',
  default: [
    { id: 1, isSelected: true },
    { id: 2, isSelected: false },
    { id: 3, isSelected: false },
    { id: 4, isSelected: false },
    { id: 5, isSelected: false },
    { id: 6, isSelected: false },
    { id: 7, isSelected: false },
    { id: 8, isSelected: false },
    { id: 9, isSelected: false },
    { id: 10, isSelected: false }
  ]
});

// 교류전 개설시 입력받은 주소
export const inputValue = atom<string>({
  key: 'inputValue',
  default: '서울특별시 영등포구 문래동6가 문래로 55'
});

// 현재 위치
export const currentLocationState = atom<T.currentLocationTypes>({
  key: 'currentLocationState',
  default: {
    lat: 37.5204082,
    lng: 126.887799
  }
});

export const LocationState = atom<T.currentLocationTypes>({
  key: 'LocationState',
  default: {
    lat: 37.5204082,
    lng: 126.887799
  }
});
