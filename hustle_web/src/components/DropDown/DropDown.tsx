import React, { useState } from "react";
import * as S from "./Styles";
import { DropDownProps } from "./DropDownProps";
import { DownArrow } from "../../stories/Icons/svg/index";
import { menuState } from "../../recoil/friendlyMatchPage/states";
import { menuTypes } from "../../recoil/friendlyMatchPage/types";
import { useRecoilState } from "recoil";

export const DropDown = ({ Items, index }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Value, setValue] = useState<string>(Items[index]);
  const [menus, setMenus] = useRecoilState(menuState);
  const HandleClick = () => {
    setIsOpen(!isOpen);
  };
  const HandleChange = (id: number) => {
    setValue(Items[id]);
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
    <S.DropDownWrap
      {...(!isOpen && { style: { border: "0", boxShadow: "none" } })}
    >
      <S.DropDownTitle onClick={() => HandleClick()}>
        <S.TitleText>{Value}</S.TitleText>
        <S.IconWrap
          {...(isOpen && {
            style: { visibility: "hidden", marginLeft: "0" },
          })}
        >
          <DownArrow />
        </S.IconWrap>
      </S.DropDownTitle>
      {isOpen &&
        Items.map((item, id) => (
          <S.DropDownItem key={index} onClick={() => HandleChange(id)}>
            {item}
          </S.DropDownItem>
        ))}
    </S.DropDownWrap>
  );
};

export default DropDown;
