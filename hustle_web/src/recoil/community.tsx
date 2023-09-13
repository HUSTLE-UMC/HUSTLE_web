import { atom, selector } from 'recoil';
import axios from 'axios';

export const clubState = atom({
  key: 'clubState',
  default: [] as boolean[],
});

export const getClubSelector = selector({
  key : 'Club/get',
  get : async({get}) => {
    try{
      const response = await axios.get('');
      return response.data;
    } catch(error) {
      throw new Error('Failed to fetch data');
    }
  }
});