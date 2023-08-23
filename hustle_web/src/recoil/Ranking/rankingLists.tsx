import { atom } from 'recoil';
import { RankingProps } from '../../constants/interfaces';
import * as T from '../CompetitionPage/types';

export const dropdownMenuState = atom<T.menuTypes[]>({
  key: 'dropdownMenuState',
  default: [
    { id: 0, label: '가톨릭대 총장배', isSelected: false },
    { id: 1, label: '국민대 총장배', isSelected: false },
    { id: 2, label: '성공회대 총장배', isSelected: false },
    { id: 3, label: '인천대 총장배', isSelected: false }
  ]
});

export const RankingState = atom<RankingProps[]>({
  key: 'rankingListsState',
  default: [
    {
      id: 0,
      menuId: 1,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '1위',
      teamname: '바스타즈',
      matchesNumber: 5,
      win: 5,
      undefeat: 0,
      defeat: 0
    },
    {
      id: 0,
      menuId: 1,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '2위',
      teamname: '가로채기',
      matchesNumber: 5,
      win: 4,
      undefeat: 1,
      defeat: 0
    },
    {
      id: 0,
      menuId: 1,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '3위',
      teamname: '리버스',
      matchesNumber: 5,
      win: 3,
      undefeat: 1,
      defeat: 1
    },
    {
      id: 0, // 스포츠 아이디
      menuId: 0, // 메뉴 아이디
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '1위',
      teamname: '가대축구부',
      matchesNumber: 6,
      win: 3,
      undefeat: 0,
      defeat: 0
    },
    {
      id: 1,
      menuId: 0,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '2위',
      teamname: '축구열심히하자',
      matchesNumber: 2,
      win: 1,
      undefeat: 0,
      defeat: 1
    },
    {
      id: 2,
      menuId: 3,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '1위',
      teamname: '인천대야구짱',
      matchesNumber: 5,
      win: 5,
      undefeat: 0,
      defeat: 0
    },
    {
      id: 2,
      menuId: 3,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '2위',
      teamname: '인천대방망이',
      matchesNumber: 5,
      win: 3,
      undefeat: 1,
      defeat: 1
    },
    {
      id: 3,
      menuId: 2,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '1위',
      teamname: '국민대배구스타',
      matchesNumber: 2,
      win: 1,
      undefeat: 0,
      defeat: 1
    },
    {
      id: 3,
      menuId: 2,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '1위',
      teamname: '성공회대화이팅',
      matchesNumber: 3,
      win: 2,
      undefeat: 1,
      defeat: 0
    },
    {
      id: 1,
      menuId: 2,
      logo: require('../../assets/images/TeamInfoTest.png'),
      rank: '4위',
      teamname: '성공회대농구부',
      matchesNumber: 5,
      win: 1,
      undefeat: 2,
      defeat: 2
    }
  ]
});
