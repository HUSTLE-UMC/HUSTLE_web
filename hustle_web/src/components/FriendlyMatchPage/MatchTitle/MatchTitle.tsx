import React from "react";
import * as S from "./Styles";
import { MatchTitleProps } from "./MatchTitleProps";

export const MatchTitle = ({ label, Icon }: MatchTitleProps) => {
  return (
    <S.TitleWrap>
      <S.TextWrap>{label}</S.TextWrap>
      <S.IconWrap>
        <Icon />
      </S.IconWrap>
    </S.TitleWrap>
  );
};

export default MatchTitle;
