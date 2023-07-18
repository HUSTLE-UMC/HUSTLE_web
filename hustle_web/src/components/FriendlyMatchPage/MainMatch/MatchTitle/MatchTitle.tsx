import React from "react";
import * as S from "./Styles";
import { MatchTitleProps } from "./MatchTitleProps";
import { Writing } from "../../../../stories/Icons/svg";
import { Link } from "react-router-dom";

export const MatchTitle = ({ label, match }: MatchTitleProps) => {
  return (
    <S.TitleContainer>
      <S.TextBox>{label}</S.TextBox>
      <Link
        to="/post"
        style={{ textDecoration: "none" }}
        {...(match && { state: { ...{ isMatch: { match } } } })}
      >
        <S.IconBox>
          <Writing />
        </S.IconBox>
      </Link>
    </S.TitleContainer>
  );
};

export default MatchTitle;
