import * as S from '../../FriendlyMatchPage/MatchMenu/Styles';
import { useRecoilState } from 'recoil';
import { communityMenuState } from '../../../recoil/community';
import { menuTypes } from '../../../recoil/friendlyMatchPage/types';

export const MatchMenu = () => {
  const [menu, setMenu] = useRecoilState(communityMenuState);
  const handleClick = (id: number) => {
    setMenu(
      menu.map((m: menuTypes) => {
        return m.id === id
          ? { ...m, isSelected: true }
          : { ...m, isSelected: false };
      })
    );
  };

  return (
    <S.TitleContainer>
      <S.MenuBox>
        {menu[0].isSelected ? (
          <S.SelectedMenu onClick={() => handleClick(0)}>
            {menu[0].label}
          </S.SelectedMenu>
        ) : (
          <S.StandardMenu onClick={() => handleClick(0)}>
            {menu[0].label}
          </S.StandardMenu>
        )}
        <S.Partition>|</S.Partition>
        {menu[1].isSelected ? (
          <S.SelectedMenu onClick={() => handleClick(1)}>
            {menu[1].label}
          </S.SelectedMenu>
        ) : (
          <S.StandardMenu onClick={() => handleClick(1)}>
            {menu[1].label}
          </S.StandardMenu>
        )}
      </S.MenuBox>
    </S.TitleContainer>
  );
};

export default MatchMenu;