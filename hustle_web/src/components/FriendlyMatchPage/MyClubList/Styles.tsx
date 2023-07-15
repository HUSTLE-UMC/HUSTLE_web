import styled from "styled-components";

export const Wrap = styled.div`
  width: 50vw;
`;

export const SelectedText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const SelectedOption = styled.div`
  box-sizing: border-box;
  border: 0.1px solid lightgray;
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.8rem;
  padding: 0 0.5rem;
  color: lightgray;
  font-size: 11px;
  border-radius: 0.3rem;
  margin: 0.3rem 0;
`;

export const OptionList = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 1.8rem;
  margin: 0 3vw;
  border-bottom: 0.1px solid lightgray;
`;

export const OptionText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
`;
