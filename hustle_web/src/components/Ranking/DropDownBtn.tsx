import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { selectedMenuIdState, dropdownMenuSelector } from '../../recoil/Ranking/ranking';
import { dropdownMenuState } from '../../recoil/Ranking/rankingLists';
import { menuTypes } from '../../recoil/CompetitionPage/types';
import * as S from '../DropDown/Styles';
import {
  DownArrow,
  RadioButton,
  RadioButtonSelected
} from '../../stories/Icons/svg/index';

interface DropDownProps {
  index: number;
}

const DropdownBtn = ({index}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menus, setMenus] = useRecoilState(dropdownMenuState);
  const [title, setTitle] = useState<string>(menus[index].label);
  const selectedId = useRecoilValue(dropdownMenuSelector);

  const handleBtnClick = (id : number) => {
    setTitle(menus[id].label);
    setMenus(
      menus.map((m:menuTypes) => {
        return m.id === id
        ? {...m, isSelected: true}
        : {...m, isSelected: false};
      })
    );
    setIsOpen(false);
  };

  return(
    <S.DropDownLayout>
      <S.DropDownTitle onClick={() => setIsOpen(!isOpen)}>
        <S.TitleText>{title}</S.TitleText>
        <S.IconBox>
          <DownArrow />
        </S.IconBox>
      </S.DropDownTitle>
      {isOpen &&
        menus.map((item) => (
          <S.DropDownItem key={item.id} onClick={() => handleBtnClick(item.id)}>
            <S.RadioButtonBox>
              {item.id === selectedId ? (
                <RadioButtonSelected />
              ) : (
                <RadioButton />
              )}
            </S.RadioButtonBox>
            <>{item.label}</>
          </S.DropDownItem>
        ))}
    </S.DropDownLayout>
  )
}

export default DropdownBtn;