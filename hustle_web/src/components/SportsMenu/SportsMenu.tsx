import * as S from './Styles';
import SportsButton from '../SportsButton/SportsButton';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  sportsMenuState,
  sportSelectState,
  sportsTypes
} from '../../recoil/SportsButton';

interface Props {
  disable?: boolean;
}

export const SportsMenu = ({ disable }: Props) => {
  const [menus, setMenus] = useRecoilState(sportsMenuState);
  const setIsSelected = useSetRecoilState(sportSelectState);
  const handleClick = (id: number) => {
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
          onClick={
            disable
              ? () => {
                  alert('종목 변경을 원하시면 목록 페이지로 돌아가 주세요.');
                }
              : () => handleClick(index + 1)
          }
        ></SportsButton>
      ))}
    </S.CategoryLayout>
  );
};

export default SportsMenu;
