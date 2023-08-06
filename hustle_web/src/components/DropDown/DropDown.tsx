import { useEffect, useState } from 'react';
import * as S from './Styles';
import {
  DownArrow,
  RadioButton,
  RadioButtonSelected
} from '../../stories/Icons/svg/index';
import { dropdownMenuState } from '../../recoil/friendlyMatchPage/states';
import { menuTypes } from '../../recoil/friendlyMatchPage/types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dropdownMenuSelector } from '../../recoil/friendlyMatchPage/selectors';
import { useNavigate } from 'react-router-dom';

interface DropDownProps {
  index: number;
}

export const DropDown = ({ index }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menus, setMenus] = useRecoilState(dropdownMenuState);
  const [title, setTitle] = useState<string>(menus[index].label);
  const selectedID = useRecoilValue(dropdownMenuSelector);
  const navigate = useNavigate();

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
    id === 0 ? navigate('/friendly/post') : navigate('/friendly/apply/form');
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

export default DropDown;
