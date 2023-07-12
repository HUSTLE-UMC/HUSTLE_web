import styled from "styled-components";

export const ButtonLayout = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color || "white"};
  border-radius: 50%;
  margin-bottom: 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 3.5px;
`;

export const Label = styled.div`
  font-size: 13px;
  font-weight: 700;
`;
