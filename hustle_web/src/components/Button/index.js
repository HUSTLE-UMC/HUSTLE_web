import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #3f37c9;
  border-radius: 50%;
  &:hover {
    //background-color: #a99fee;
  }
}
`;

const IconWrapper = styled.span`
  width: 24px;
  height: 24px;
  /* ... */ 
`;

const Button = ({ fontSize, children }) => (
    <StyledButton fontSize={fontSize}>
        <IconWrapper>
            <img src="../../assets/icons/play.svg" alt="Loading" />
        </IconWrapper>
        {children}
    </StyledButton>
);
export default Button;
