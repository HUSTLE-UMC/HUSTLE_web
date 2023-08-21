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
  position: relative;
`;

export const DropDownItem = styled(DropDownTitle)`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  padding-left: 4.5rem;
  border-top: 1px solid ${Colors.Gray20};
  border-radius: 0 0 1.2rem 1.2rem;
  font-weight: ${FONT.WEIGHT.REGULAR};
  z-index: 999;
  background: white;
`;

export const TitleText = styled.div`
  margin: 0 2rem;
`;

export const IconBox = styled.div`
  padding-bottom: 0.5rem;
  position: absolute;
  right: 1rem;
`;

export const RadioButtonBox = styled.div`
  position: absolute;
  left: 2rem;
  padding-top: 0.5rem;
`;
