import React, { useState } from "react";
import * as S from "./Styles";
import { ButtonProps } from "./ButtonProps";

const SportsButton = ({ label, Icon }: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.ButtonLayout>
      <S.StyledButton
        {...(isClicked && { color: "#3F37C9" })}
        onClick={() => handleClick()}
      >
        <Icon {...(isClicked ? { fill: "white" } : { fill: "black" })} />
      </S.StyledButton>
      <S.Label>{label}</S.Label>
    </S.ButtonLayout>
  );
};

export default SportsButton;
