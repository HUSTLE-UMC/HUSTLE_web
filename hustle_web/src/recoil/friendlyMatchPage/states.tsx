import { atom } from 'recoil';
import * as T from './types';

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
  default: [
    {
      sportId: 1,
      sport: '농구',
      title: '대회 연습 상대 구해요!',
      clubName: '가톨릭대학교 바스타즈',
      location: '가톨릭대학교 체육관',
      date: '2023-07-07',
      person: '최유빈',
      contact: '010-0000-0000'
    },
    {
      sportId: 3,
      sport: '배구',
      title: '배구 경기 하실 분!',
      clubName: '배구동아리',
      location: 'ㅇㅇ시 ㅇㅇ동',
      date: '2023-07-07',
      person: '홍길동',
      contact: '010-0000-0000'
    },
    {
      sportId: 0,
      sport: '축구',
      title: '축구 같이 합시다',
      clubName: '축구동아리',
      location: '서울특별시 어디어디',
      date: '2023-07-07',
      person: '아무개',
      contact: '010-0000-0000'
    },
    {
      sportId: 0,
      sport: '축구',
      title: '축구 교류전 할 사람',
      clubName: '축구동아리222',
      location: '시흥시 어디어디 체육관',
      date: '2023-07-07',
      person: '아무개2',
      contact: '010-0000-0000'
    }
  ]
});

// 초청해주세요 목록
export const invitationListsState = atom<T.invitationListsTypes[]>({
  key: 'invitationListsState',
  default: [
    {
      sportId: 0,
      sport: '축구',
      title: '축구 교류전 초청해주세요',
      clubName: '축구 동아리',
      location: '시흥시 어디어디 체육관',
      date: '2023-07-07',
      person: '아무개2',
      contact: '010-0000-0000'
    },
    {
      sportId: 1,
      sport: '농구',
      title: '열심히 뛰겠습니다!',
      clubName: '바스타즈',
      location: '가톨릭대학교',
      date: '2023-07-07',
      person: '아무개2',
      contact: '010-0000-0000'
    }
  ]
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
