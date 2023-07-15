import React from "react";
import * as S from "./Styles";
import { ButtonProps } from "./ButtonProps";

export const SubmitButton = ({ label, Icon, login, more }: ButtonProps) => {
  if (login) {
    return <S.LargeButton>{label}</S.LargeButton>;
  }
  if (more) {
    return <S.SmallButton>{label}</S.SmallButton>;
  }
  return (
    <S.MediumButton>
      <div>{label}</div>
      <S.IconWrap>
        <Icon />
      </S.IconWrap>
    </S.MediumButton>
  );
};
export default SubmitButton;
