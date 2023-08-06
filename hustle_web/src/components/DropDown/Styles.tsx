import styled from 'styled-components';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';

export const DropDownLayout = styled.div`
  width: 18.5rem;
  border: 1px solid ${Colors.Gray20};
  border-radius: 1.2rem;
  background: ${Colors.TrueWhite};
`;

export const DropDownTitle = styled.div`
  width: 100%;
  height: 4rem;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.Gray80};
`;

export const DropDownItem = styled(DropDownTitle)`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 0 3rem;
  border-top: 1px solid ${Colors.Gray20};
  border-radius: 0;
  font-weight: ${FONT.WEIGHT.REGULAR};
  position: relative;
  z-index: 999;
`;

export const TitleText = styled.div`
  margin: 0 3rem;
`;

export const IconBox = styled.div`
  padding-bottom: 0.5rem;
`;

export const RadioButtonBox = styled.div`
  padding-top: 0.5rem;
`;
