import styled from "styled-components";

export const MediumButton = styled.div`
  width: 15rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #677af5;
  color: white;
  border-radius: 5px;
`;

export const SmallButton = styled(MediumButton)`
  width: 12rem;
  height: 1.6rem;
  font-size: 14px;
`;

export const LargeButton = styled(MediumButton)`
  width: 30rem;
`;

export const IconWrap = styled.div`
  margin-left: 0.5rem;
`;
