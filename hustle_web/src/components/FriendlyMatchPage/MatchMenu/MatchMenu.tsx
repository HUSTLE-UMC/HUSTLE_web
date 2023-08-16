import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { friendlyMenuState } from '../../../recoil/friendlyMatchPage/states';
import { menuTypes } from '../../../recoil/friendlyMatchPage/types';

export const MatchMenu = () => {
  const [menu, setMenu] = useRecoilState(friendlyMenuState);
  const handleClick = (id: number) => {
    setMenu(
      menu.map((m: menuTypes) => {
        return m.id === id
          ? { ...m, isSelected: true }
          : { ...m, isSelected: false };
      })
    );
  };
  const navigate = useNavigate();
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
      <S.WriteButton onClick={() => navigate('/friendly/post')}>
        글쓰기
      </S.WriteButton>
    </S.TitleContainer>
  );
};

export default MatchMenu;
