import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./ButtonProps";

const SportsButton = ({ label, clicked, Icon }: ButtonProps) => {
  return (
    <S.ButtonLayout>
      <S.StyledButton
        {...(clicked ? { color: "#3F37C9" } : { color: "white" })}
      >
        <Icon {...(clicked ? { fill: "white" } : { fill: "black" })}></Icon>
      </S.StyledButton>
      <S.Label>{label}</S.Label>
    </S.ButtonLayout>
  );
};

export default SportsButton;
