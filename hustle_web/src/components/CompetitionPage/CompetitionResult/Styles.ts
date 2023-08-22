import styled from 'styled-components';
import FONT from '../../../styles/Font';
import Colors from '../../../styles/Color';

export const Layout = styled.div`
  width: 100%;
  height: 138.5rem;
  margin-top: 5rem;
`;

export const TextBox = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  font-size: ${FONT.SIZE.BODY3};
  color: ${Colors.Gray80};
`;

export const LabelWrap = styled.div`
  width: auto;
  height: 6rem;
  align-items: center;
  justify-content: center;
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
`;
