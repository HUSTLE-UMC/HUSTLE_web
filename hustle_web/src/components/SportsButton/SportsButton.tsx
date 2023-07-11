import React from "react";
import { StyledButton, Label, ButtonLayout } from "./styles";

interface ButtonProps {
  label: string;
  clicked?: boolean;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Index = ({ label, clicked, Icon }: ButtonProps) => {
  return (
    <ButtonLayout>
      <StyledButton {...(clicked ? { color: "#3F37C9" } : { color: "white" })}>
        <Icon {...(clicked ? { fill: "white" } : { fill: "black" })} />
      </StyledButton>
      <Label>{label}</Label>
    </ButtonLayout>
  );
};

export default Index;
