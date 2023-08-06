import { atom } from 'recoil';
import * as T from './types';

export const dropdownMenuState = atom<T.menuTypes[]>({
  key: 'dropdownMenuState',
  default: [
    { id: 0, label: '교류전 개설', isSelected: false },
    { id: 1, label: '교류전 신청', isSelected: false }
  ]
});

// 교류전 목록
export const clubListsState = atom<T.clubListsTypes[]>({
  key: 'clubListsState',
  default: [
    {
      sportId: 1,
      img: '',
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
      img: '',
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
      img: '',
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
      img: '',
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

// 사용자가 신청하기를 선택한 교류전
export const selectedMatchID = atom<number>({
  key: 'selectedMatchID',
  default: 0
});
