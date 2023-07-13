import { atom, selector } from "recoil";
import axios from 'axios';

export const questionState = atom({
  key: 'questionState',
  default: []
});

export const getQuestionSelector = selector({
  key : 'question/get',
  get : async({get}) => {
    try{
      const response = await axios.get('question/API');
      const data = response.data;

      //게시물 개수
      const totalPosts = data.length;
      //페이지당 보여져야하는 게시물
      const postsPerPage = 9;
      //총 페이지 수 계산
      const totalPage = Math.ceil(totalPosts/postsPerPage); 
      return {
        data,
        totalPage,
      };
    } catch(error) {
      throw new Error('Failed to fetch data');
    }
  },
});

export const getLectureSelector = selector({
  key : 'lecture/get',
  get : async({get}) => {
    try{
      const response = await axios.get('lecture/API');
      const data = response.data;
      //게시물 개수
      const totalPosts = data.length;
      //페이지당 보여져야하는 게시물
      const postsPerPage = 9;
      //총 페이지 수 계산
      const totalPage = Math.ceil(totalPosts/postsPerPage); 
      return {
        data,
        totalPage,
      };
    } catch(error) {
      throw new Error('Failed to fetch data');
    } 
  },
});