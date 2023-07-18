import React from "react";
import * as S from "./Styles";
import { ButtonProps } from "./ButtonProps";
import { Submit } from "../../../stories/Icons/svg/index";

export const SubmitButton = ({ label, small, onClick, Icon }: ButtonProps) => {
  return (
    <>
      {small ? (
        <S.SmallButton onClick={onClick}>
          {label}
          {Icon && (
            <S.IconWrap>
              <Submit />
            </S.IconWrap>
          )}
        </S.SmallButton>
      ) : (
        <S.MediumButton onClick={onClick}>
          <div>{label}</div>
          {Icon && (
            <S.IconWrap>
              <Submit />
            </S.IconWrap>
          )}
        </S.MediumButton>
      )}
    </>
  );
};
export default SubmitButton;
