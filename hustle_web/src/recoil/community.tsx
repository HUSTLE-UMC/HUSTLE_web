import { atom, selector } from "recoil";
import axios from 'axios';

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
