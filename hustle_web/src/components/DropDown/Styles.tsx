import styled from 'styled-components';

export const DropDownWrap = styled.div`
  width: 25rem;
  height: 4rem;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 3px;
  font-size: 18px;
`;

export const DropDownTitle = styled.div`
  box-sizing: border-box;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const TitleText = styled.div`
  font-weight: 700;
  margin: 0 2rem;
`;

export const IconWrap = styled.div`
  display: block;
  padding-bottom: 0.5rem;
`;

export const DropDownItem = styled(DropDownTitle)`
  border-top: 0;
  border-radius: 0;
  font-weight: 400;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 3px;
  position: relative;
  z-index: 999;
`;
