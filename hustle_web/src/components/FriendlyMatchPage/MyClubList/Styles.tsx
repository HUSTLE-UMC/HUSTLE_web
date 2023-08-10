import styled from 'styled-components';

export const SelectedOption = styled.div`
  box-sizing: border-box;
  border: 0.1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  width: 50rem;
  height: 4.5rem;
  padding: 0 1.5rem;
  color: rgba(0, 0, 0, 0.25);
  font-size: 17px;
  border-radius: 1rem;
  margin: 1rem 0;
}
`;

export const OptionList = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45rem;
  height: 4rem;
  margin: 1rem 2.5rem;
  border-bottom: 0.1px solid gray;
`;

export const OptionText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 700;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
`;
