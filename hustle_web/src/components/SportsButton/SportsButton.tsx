import * as S from "./Styles";
import { ButtonProps } from "./ButtonProps";

const SportsButton = ({ label, Icon, selected, onClick }: ButtonProps) => {
  return (
    <S.ButtonLayout>
      <S.StyledButton {...(selected && { color: "#3F37C9" })} onClick={onClick}>
        <Icon {...(selected ? { fill: "white" } : { fill: "black" })} />
      </S.StyledButton>
      <S.Label>{label}</S.Label>
    </S.ButtonLayout>
  );
};

export default SportsButton;
