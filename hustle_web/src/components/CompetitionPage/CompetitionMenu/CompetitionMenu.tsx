import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  competitionMenuState,
  CompetitionState
} from '../../../recoil/CompetitionPage/states';
import { menuTypes } from '../../../recoil/CompetitionPage/types';
import GroupSelector from '../../../components/GroupSelector/GroupSelector';

export const CompetitionMenu = () => {
  const [menu, setMenu] = useRecoilState(competitionMenuState);
  const competitions = useRecoilValue(CompetitionState);

  const selectedCompetitionType = competitions.find(
    (comp) => comp.title === menu.find((m) => m.isSelected)?.label
  );
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
      <S.LabelContainer>{selectedCompetitionType.title}</S.LabelContainer>
      <S.SortContainer>
        <GroupSelector
          type={
            selectedCompetitionType?.sort === '예선' ? 'Preliminary' : 'Finals'
          }
          label={selectedCompetitionType?.sort === '예선' ? 'A조' : '32강'}
          onClick={() => {}}
        />
        <GroupSelector
          type={
            selectedCompetitionType?.sort === '예선' ? 'Preliminary' : 'Finals'
          }
          label={selectedCompetitionType?.sort === '예선' ? 'A조' : '32강'}
          onClick={() => {}}
        />
      </S.SortContainer>
    </S.TitleContainer>
  );
};

export default CompetitionMenu;
