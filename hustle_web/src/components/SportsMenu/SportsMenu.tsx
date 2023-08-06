import * as S from './Styles';
import SportsButton from '../SportsButton/SportsButton';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  sportsMenuState,
  sportSelectState,
  sportsTypes
} from '../../recoil/SportsButton';

export const SportsMenu = () => {
  const [menus, setMenus] = useRecoilState(sportsMenuState);
  const setIsSelected = useSetRecoilState(sportSelectState);
  const handleSelect = (id: number) => {
    setMenus(
      menus.map((m: sportsTypes) => {
        return m.id === id
          ? { ...m, selected: true }
          : { ...m, selected: false };
      })
    );
    setIsSelected(true);
  };
  return (
    <S.CategoryLayout>
      {menus.map((m, index) => (
        <SportsButton
          key={index}
          label={m.label}
          selected={m.selected}
          onClick={() => handleSelect(index)}
        ></SportsButton>
      ))}
    </S.CategoryLayout>
  );
};

export default SportsMenu;
