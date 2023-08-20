import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { competitionMenuState } from '../../../recoil/CompetitionPage/states';
import { menuTypes } from '../../../recoil/CompetitionPage/types';

export const CompetitonMenu = () => {
  const [menu, setMenu] = useRecoilState(competitionMenuState);
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
    </S.TitleContainer>
  );
};

export default CompetitonMenu;
