import * as S from './Styles';
import SportsButton from '../SportsButton/SportsButton';
import { useRecoilState } from 'recoil';
import { sportsMenuState, sportsTypes } from '../../recoil/SportsButton';

export const SportsMenu = () => {
  const [menus, setMenus] = useRecoilState(sportsMenuState);
  const handleSelect = (id: number) => {
    setMenus(
      menus.map((m: sportsTypes) => {
        return m.id === id
          ? { ...m, selected: true }
          : { ...m, selected: false };
      })
    );
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
