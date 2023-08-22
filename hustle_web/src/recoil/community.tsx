import { atom, selector } from 'recoil';
import axios from 'axios';
import * as T from './friendlyMatchPage/types';

export const questionState = atom({
  key: 'questionState',
  default: [] as boolean[],
});

export const getQuestionSelector = selector({
  key : 'Question/get',
  get : async({get}) => {
    try{
      const response = await axios.get('/질문게시판');
      return response.data;
    } catch(error) {
      throw new Error('Failed to fetch data');
    }
  }
});

export const communityMenuSelector = selector({
  key: 'communityMenuSelector',
  get: ({ get }: any) => {
    const menus = get(communityMenuState);
    const selectedId = menus.findIndex((v: T.menuTypes) => v.isSelected);
    return selectedId;
  }
});


export const communityMenuState = atom<T.menuTypes[]>({
  key: 'friendlyMenuState',
  default: [
    { id: 0, label: '질문 게시판', isSelected: true },
    { id: 1, label: '동아리 게시판', isSelected: false }
  ]
});