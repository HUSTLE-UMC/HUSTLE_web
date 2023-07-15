import React, { useState } from "react";
import * as S from "./Styles";
import { DropDownProps } from "./DropDownProps";
import { DownArrow } from "../../stories/Icons/svg/index";

export const DropDown = ({ Items }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [Value, setValue] = useState<string>(Items[0]);
  const HandleClick = () => {
    setIsOpen(!isOpen);
  };
  const HandleChange = (prop: number) => {
    setValue(Items[prop]);
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
        Items.map((item, index) => (
          <S.DropDownItem key={index} onClick={() => HandleChange(index)}>
            {item}
          </S.DropDownItem>
        ))}
    </S.DropDownWrap>
  );
};

export default DropDown;
