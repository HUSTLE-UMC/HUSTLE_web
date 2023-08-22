import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { dropdownMenuSelector } from '../../recoil/Ranking/ranking';
import { dropdownMenuState } from '../../recoil/Ranking/rankingLists';
import { menuTypes } from '../../recoil/CompetitionPage/types';
import * as S from '../DropDown/Styles';
import {
  DownArrow,
  RadioButton,
  RadioButtonSelected
} from '../../stories/Icons/svg/index';

const DropdownBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menus, setMenus] = useRecoilState(dropdownMenuState);
  const selectedID = useRecoilValue(dropdownMenuSelector);
  const [title, setTitle] = useState<string>(selectedID !== -1 ? menus[selectedID].label : '');

  console.log(selectedID);


  const HandleChange = (id: number) => {
    setTitle(menus[id].label);
    setMenus(
      menus.map((m: menuTypes) => {
        return m.id === id
          ? { ...m, isSelected: true }
          : { ...m, isSelected: false };
      })
    );
    setIsOpen(false);
  };

  return (
    <S.DropDownLayout>
      <S.DropDownTitle onClick={() => setIsOpen(!isOpen)}>
        <S.TitleText>{title}</S.TitleText>
        <S.IconBox>
          <DownArrow />
        </S.IconBox>
      </S.DropDownTitle>
      {isOpen &&
        menus.map((item) => (
          <S.DropDownItem key={item.id} onClick={() => HandleChange(item.id)}>
            <S.RadioButtonBox>
              {item.id === selectedID ? (
                <RadioButtonSelected />
              ) : (
                <RadioButton />
              )}
            </S.RadioButtonBox>
            <>{item.label}</>
          </S.DropDownItem>
        ))}
    </S.DropDownLayout>
  );
};


export default DropdownBtn;