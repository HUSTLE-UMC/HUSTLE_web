import styled from "styled-components";

export const DropDownWrap = styled.div`
  border: 0.5px solid lightgray;
  width: 25vw;
  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 3px;
`;

export const DropDownTitle = styled.div`
  box-sizing: border;
  background: "white";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5vh;
  border: 0.5px solid lightgray;
  border-radius: 20px;
`;

export const TitleText = styled.div`
  font-weight: 700;
  margin: 0 1rem;
`;

export const IconWrap = styled.div`
  display: block;
`;

export const DropDownItem = styled(DropDownTitle)`
  border: 0;
  border-bottom: 0.5px solid lightgray;
  border-radius: 0;
  font-weight: 400;
`;
