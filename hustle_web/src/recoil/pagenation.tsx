import {atom} from 'recoil';

export const currentPageState = atom({
  key : 'currentPage',
  default : 1,
});

export const totalPageState = atom({
  key: 'totalPage',
  default : 9,
})