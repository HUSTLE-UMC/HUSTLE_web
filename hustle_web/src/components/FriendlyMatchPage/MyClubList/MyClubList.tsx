import React, { useState } from "react";
import * as S from "./Styles";
import { ClubListProps } from "./ClubListProps";
import { Arrow } from "../../../stories/Icons/svg/index";

export const MyClubList = ({ clubs }: ClubListProps) => {
  const [value, setValue] = useState("희망하는 동아리명을 선택하세요");
  const [isSelected, setIsSelected] = useState(false);
  const handleChange = (i: number) => {
    setValue(clubs[i]);
    setIsSelected(true);
  };
  return (
    <S.Wrap>
      <S.SelectedText>동아리 명</S.SelectedText>
      <S.SelectedOption {...(isSelected && { style: { color: "black" } })}>
        {value}
      </S.SelectedOption>
      {clubs.map((club, index) => (
        <S.OptionList key={index} onClick={() => handleChange(index)}>
          <S.OptionText>{club}</S.OptionText>
          <S.IconWrap>
            <Arrow transform="rotate(270)" />
          </S.IconWrap>
        </S.OptionList>
      ))}
    </S.Wrap>
  );
};

export default MyClubList;
