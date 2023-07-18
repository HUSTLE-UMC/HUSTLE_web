import styled from "styled-components";

export const ButtonLayout = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color || "white"};
  border-radius: 50%;
  margin-bottom: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 5px;
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
